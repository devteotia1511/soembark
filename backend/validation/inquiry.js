'use strict';

const { z } = require('zod');

// Shared fields
const email = z.string().trim().toLowerCase().email('Enter a valid email').max(200);
const honeypot = z.string().max(0, 'Spam detected').optional().or(z.literal('')).or(z.null());

const baseContact = z.object({
  name:  z.string().trim().min(2, 'Name is too short').max(120, 'Name is too long'),
  email,
  // Honeypot: bots fill this, humans don't see it.
  website: honeypot,
});

const generalSchema = baseContact.extend({
  type: z.literal('contact'),
  message: z.string().trim().min(10, 'Tell us a bit more (10+ characters)').max(5000),
});

const projectSchema = baseContact.extend({
  type: z.literal('project'),
  company:  z.string().trim().max(200).optional().or(z.literal('')),
  budget:   z.string().trim().max(60).optional().or(z.literal('')),
  timeline: z.string().trim().max(60).optional().or(z.literal('')),
  message:  z.string().trim().min(10, 'Tell us a bit more (10+ characters)').max(5000),
});

const newsletterSchema = z.object({
  type: z.literal('newsletter'),
  email,
  website: honeypot,
});

const schemas = {
  contact: generalSchema,
  project: projectSchema,
  newsletter: newsletterSchema,
};

function pickSchema(type) {
  return schemas[type] || null;
}

/**
 * Express middleware factory: validates req.body against the schema for the
 * given `type` field. Sends 400 with { error: { code, message, fields } } on failure.
 */
function validateInquiry(req, res, next) {
  const type = req.body && req.body.type;
  const schema = pickSchema(type);
  if (!schema) {
    return res.status(400).json({
      error: {
        code: 'invalid_type',
        message: 'Invalid inquiry type. Must be one of: contact, project, newsletter.',
        fields: { type: ['Choose what you are reaching out about.'] },
      },
    });
  }

  const result = schema.safeParse(req.body);
  if (!result.success) {
    const fields = {};
    for (const issue of result.error.issues) {
      const key = issue.path.join('.') || '_';
      if (!fields[key]) fields[key] = [];
      fields[key].push(issue.message);
    }
    return res.status(400).json({
      error: {
        code: 'validation_error',
        message: 'Some fields need attention.',
        fields,
      },
    });
  }

  req.inquiry = result.data;
  next();
}

module.exports = { validateInquiry, pickSchema };
