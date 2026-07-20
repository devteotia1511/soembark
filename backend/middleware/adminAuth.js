'use strict';

const crypto = require('crypto');
const env = require('../config/env');

/**
 * Middleware: require a valid `x-admin-key` header.
 * Uses timing-safe comparison to prevent length/value timing attacks.
 */
function adminAuth(req, res, next) {
  const provided = req.get('x-admin-key') || '';
  const expected = env.ADMIN_API_KEY;

  const a = Buffer.from(provided, 'utf8');
  const b = Buffer.from(expected, 'utf8');

  // Both buffers must be the same length for timingSafeEqual.
  const ok = a.length === b.length && crypto.timingSafeEqual(a, b);

  if (!ok) {
    return res.status(401).json({
      error: { code: 'unauthorized', message: 'Invalid or missing admin key.' },
    });
  }
  next();
}

module.exports = { adminAuth };
