'use strict';

const mongoose = require('mongoose');

const INQUIRY_TYPES = ['contact', 'project', 'newsletter'];
const INQUIRY_STATUSES = ['new', 'read', 'archived', 'replied'];

const inquirySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: INQUIRY_TYPES,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: INQUIRY_STATUSES,
      default: 'new',
      index: true,
    },
    name:      { type: String, trim: true, maxlength: 120 },
    email:     { type: String, required: true, trim: true, lowercase: true, maxlength: 200, index: true },
    company:   { type: String, trim: true, maxlength: 200 },
    budget:    { type: String, trim: true, maxlength: 60 },
    timeline:  { type: String, trim: true, maxlength: 60 },
    message:   { type: String, trim: true, maxlength: 5000 },
    source:    { type: String, default: 'website', maxlength: 60 },
    // Hashed IP (last octet zeroed) so we have a coarse spam signal without storing PII.
    ipHash:    { type: String, maxlength: 64 },
    userAgent: { type: String, maxlength: 500 },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
);

// Compound index for the admin list view (newest first, filterable by type).
inquirySchema.index({ createdAt: -1, type: 1 });

module.exports = mongoose.model('Inquiry', inquirySchema);
module.exports.INQUIRY_TYPES = INQUIRY_TYPES;
module.exports.INQUIRY_STATUSES = INQUIRY_STATUSES;
