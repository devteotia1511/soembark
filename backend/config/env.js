'use strict';

require('dotenv').config();

function required(name) {
  const v = process.env[name];
  if (!v || !String(v).trim()) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return String(v).trim();
}

function optional(name, fallback) {
  const v = process.env[name];
  return v && String(v).trim() ? String(v).trim() : fallback;
}

const env = Object.freeze({
  PORT: Number(optional('PORT', '5000')),
  MONGODB_URI: required('MONGODB_URI'),
  CLIENT_ORIGIN: optional('CLIENT_ORIGIN', 'http://localhost:5173'),
  ADMIN_API_KEY: required('ADMIN_API_KEY'),
  RESEND_API_KEY: optional('RESEND_API_KEY', ''),
  NOTIFY_TO: optional('NOTIFY_TO', 'hello@soembark.com'),
  NOTIFY_FROM: optional('NOTIFY_FROM', 'SoEmbark <noreply@soembark.com>'),
  NODE_ENV: optional('NODE_ENV', 'development'),
});

module.exports = env;
