'use strict';

const rateLimit = require('express-rate-limit');

// Public form submissions: 5 per 15 minutes per IP.
const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    error: {
      code: 'rate_limited',
      message: 'Too many submissions. Please try again in a few minutes.',
    },
  },
});

// Admin reads/writes: a bit more generous, but still bounded.
const adminLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    error: { code: 'rate_limited', message: 'Too many admin requests. Slow down.' },
  },
});

module.exports = { submitLimiter, adminLimiter };
