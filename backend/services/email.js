'use strict';

const env = require('../config/env');
const { Resend } = require('resend');

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

const TYPE_LABEL = {
  contact:    'General message',
  project:    'Project inquiry',
  newsletter: 'Newsletter signup',
};

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function field(label, value) {
  if (value == null || value === '') return '';
  return `<tr>
    <td style="padding:6px 12px;color:#6B6B6B;font-size:13px;width:140px;vertical-align:top">${escapeHtml(label)}</td>
    <td style="padding:6px 12px;color:#333333;font-size:14px;white-space:pre-wrap">${escapeHtml(value)}</td>
  </tr>`;
}

function buildHtml(inquiry) {
  const typeLabel = TYPE_LABEL[inquiry.type] || inquiry.type;
  return `
  <div style="font-family:Inter,system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#FFFFFF;border:1px solid #EFEFEF;border-radius:16px">
    <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#1CABB0;font-weight:600;margin-bottom:8px">
      SoEmbark · New submission
    </div>
    <h1 style="margin:0 0 16px;font-size:20px;color:#333333">${escapeHtml(typeLabel)}</h1>
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #F5F5F5">
      ${field('Name',     inquiry.name)}
      ${field('Email',    inquiry.email)}
      ${field('Company',  inquiry.company)}
      ${field('Budget',   inquiry.budget)}
      ${field('Timeline', inquiry.timeline)}
      ${field('Message',  inquiry.message)}
    </table>
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #F5F5F5;font-size:12px;color:#9A9A9A">
      Received ${new Date().toISOString()} · ${escapeHtml(inquiry.ipHash ? 'ip:' + inquiry.ipHash.slice(0, 8) : 'ip:n/a')}
    </div>
  </div>`;
}

function buildSubject(inquiry) {
  const label = TYPE_LABEL[inquiry.type] || 'Submission';
  const who = inquiry.name || inquiry.email;
  return `[SoEmbark] ${label} — ${who}`;
}

/**
 * Send a notification email for a new inquiry.
 * Returns { ok: true, id, channel: 'resend' | 'log' } on success,
 * or { ok: false, reason } if even the fallback log failed.
 * Never throws — the public route should not fail because email is down.
 */
async function sendInquiryNotification(inquiry) {
  const subject = buildSubject(inquiry);
  const html = buildHtml(inquiry);
  const text = [
    TYPE_LABEL[inquiry.type] || inquiry.type,
    '',
    `Name:     ${inquiry.name || ''}`,
    `Email:    ${inquiry.email || ''}`,
    `Company:  ${inquiry.company || ''}`,
    `Budget:   ${inquiry.budget || ''}`,
    `Timeline: ${inquiry.timeline || ''}`,
    '',
    'Message:',
    inquiry.message || '',
  ].join('\n');

  if (!resend) {
    // Fallback: log so the developer can still see submissions in dev.
    console.log('\n──── Inquiry email (RESEND_API_KEY not set) ────');
    console.log(`To:      ${env.NOTIFY_TO}`);
    console.log(`From:    ${env.NOTIFY_FROM}`);
    console.log(`Subject: ${subject}`);
    console.log(text);
    console.log('──── end ────\n');
    return { ok: true, channel: 'log' };
  }

  try {
    const result = await resend.emails.send({
      from: env.NOTIFY_FROM,
      to: env.NOTIFY_TO,
      replyTo: inquiry.email,
      subject,
      html,
      text,
    });
    return { ok: true, id: result?.data?.id, channel: 'resend' };
  } catch (err) {
    console.error('[email] Resend send failed:', err?.message || err);
    // Fall back to log so the submission is not lost.
    console.log('\n──── Inquiry email (Resend failed, fallback log) ────');
    console.log(`To:      ${env.NOTIFY_TO}`);
    console.log(`Subject: ${subject}`);
    console.log(text);
    console.log('──── end ────\n');
    return { ok: false, reason: err?.message || 'send_failed', channel: 'log' };
  }
}

module.exports = { sendInquiryNotification };
