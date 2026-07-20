'use strict';

const env = require('./config/env');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Trust the first proxy hop so req.ip is correct behind nginx/Heroku/Render
// in production. Harmless for local dev.
app.set('trust proxy', 1);

// Security headers
app.use(helmet());

// CORS allowlist (defaults to local Vite dev server)
app.use(cors({
  origin: env.CLIENT_ORIGIN,
  credentials: false,
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
}));

// JSON body parsing with a tight cap to keep payloads small.
app.use(express.json({ limit: '10kb' }));

// Request logging in dev only.
if (env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SoEmbark API is running' });
});

// Routes
app.use('/api/inquiries', require('./routes/inquiries'));

// 404 for anything else under /api
app.use('/api', (req, res) => {
  res.status(404).json({ error: { code: 'not_found', message: 'No such endpoint' } });
});

// Central error handler. 4 args required for Express to recognise it.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  // Mongoose validation errors → 400
  if (err && err.name === 'ValidationError') {
    return res.status(400).json({
      error: { code: 'validation_error', message: err.message, fields: err.errors },
    });
  }
  console.error('[error]', err);
  res.status(500).json({
    error: {
      code: 'internal_error',
      message: env.NODE_ENV === 'production' ? 'Something went wrong.' : (err?.message || 'Internal server error'),
    },
  });
});

async function main() {
  await mongoose.connect(env.MONGODB_URI);
  console.log('✓ MongoDB connected');

  app.listen(env.PORT, () => {
    const channel = env.RESEND_API_KEY ? 'resend' : 'console (no RESEND_API_KEY)';
    console.log(`✓ Inquiry API on :${env.PORT}`);
    console.log(`  CORS origin: ${env.CLIENT_ORIGIN}`);
    console.log(`  Email channel: ${channel}`);
    console.log(`  Admin endpoints require x-admin-key header.`);
  });
}

main().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
