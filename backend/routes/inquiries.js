'use strict';

const crypto = require('crypto');
const express = require('express');
const mongoose = require('mongoose');
const Inquiry = require('../models/Inquiry');
const { INQUIRY_TYPES, INQUIRY_STATUSES } = require('../models/Inquiry');
const { validateInquiry } = require('../validation/inquiry');
const { sendInquiryNotification } = require('../services/email');
const { adminAuth } = require('../middleware/adminAuth');
const { submitLimiter, adminLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// Hash the IP for spam signals without storing full PII.
// Zeroes the last octet of an IPv4 (or last group of an IPv6) so it's coarse.
function hashIp(rawIp) {
  if (!rawIp) return null;
  // Express may give us a comma list when behind a proxy; use the first.
  const ip = String(rawIp).split(',')[0].trim();
  let coarse = ip;
  if (ip.includes('.') && ip.split('.').length === 4) {
    coarse = ip.split('.').slice(0, 3).join('.') + '.0';
  } else if (ip.includes(':')) {
    coarse = ip.split(':').slice(0, -1).join(':') + ':0';
  }
  return crypto.createHash('sha256').update(coarse).digest('hex');
}

const RESPONSE_MESSAGES = {
  contact:    'Thanks for the message — we will be in touch shortly.',
  project:    'Thanks for the project details. We will reply within one working day.',
  newsletter: 'You are on the list. Welcome aboard.',
};

// POST /api/inquiries  (public, rate-limited)
router.post('/', submitLimiter, validateInquiry, async (req, res, next) => {
  try {
    const data = req.inquiry;
    const doc = await Inquiry.create({
      type:      data.type,
      name:      data.name,
      email:     data.email,
      company:   data.company || undefined,
      budget:    data.budget || undefined,
      timeline:  data.timeline || undefined,
      message:   data.message,
      source:    'website',
      ipHash:    hashIp(req.ip || req.headers['x-forwarded-for']),
      userAgent: (req.get('user-agent') || '').slice(0, 500),
    });

    // Fire-and-await: we wait so the response is consistent, but a failure
    // does not fail the user's submission.
    const emailResult = await sendInquiryNotification(doc.toObject());

    return res.status(201).json({
      success: true,
      id: doc._id,
      message: RESPONSE_MESSAGES[data.type] || 'Thanks — we will be in touch.',
      email: emailResult,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/inquiries  (admin)
router.get('/', adminAuth, adminLimiter, async (req, res, next) => {
  try {
    const { type, status, q } = req.query;
    const page  = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 25));

    const filter = {};
    if (type && INQUIRY_TYPES.includes(String(type))) filter.type = type;
    if (status && INQUIRY_STATUSES.includes(String(status))) filter.status = status;
    if (q && String(q).trim()) {
      const re = new RegExp(String(q).trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.$or = [{ name: re }, { email: re }, { company: re }, { message: re }];
    }

    const [items, total] = await Promise.all([
      Inquiry.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Inquiry.countDocuments(filter),
    ]);

    res.json({ success: true, data: items, page, limit, total, pages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
});

// GET /api/inquiries/:id  (admin)
router.get('/:id', adminAuth, adminLimiter, async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: { code: 'bad_id', message: 'Invalid id' } });
    }
    const doc = await Inquiry.findById(req.params.id).lean();
    if (!doc) {
      return res.status(404).json({ error: { code: 'not_found', message: 'Inquiry not found' } });
    }
    res.json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/inquiries/:id/status  (admin)
router.patch('/:id/status', adminAuth, adminLimiter, async (req, res, next) => {
  try {
    const { status } = req.body || {};
    if (!INQUIRY_STATUSES.includes(status)) {
      return res.status(400).json({
        error: { code: 'invalid_status', message: `Status must be one of: ${INQUIRY_STATUSES.join(', ')}` },
      });
    }
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: { code: 'bad_id', message: 'Invalid id' } });
    }
    const doc = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { $set: { status } },
      { returnDocument: 'after' }
    ).lean();
    if (!doc) {
      return res.status(404).json({ error: { code: 'not_found', message: 'Inquiry not found' } });
    }
    res.json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
