import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { submitInquiry, ApiError } from '../lib/api';

const INTENTS = [
  { id: 'project',    label: 'Project inquiry' },
  { id: 'contact',    label: 'General message' },
  { id: 'newsletter', label: 'Newsletter' },
];

const BUDGETS = [
  '',
  '< $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
];

const TIMELINES = [
  '',
  'ASAP',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  'Just exploring',
];

const emptyForm = (intent) => ({
  type: intent,
  name: '',
  email: '',
  company: '',
  budget: '',
  timeline: '',
  message: '',
  // Honeypot: real users never see this field.
  website: '',
});

function fieldsForIntent(intent) {
  if (intent === 'newsletter') return ['email', 'website'];
  if (intent === 'contact')    return ['name', 'email', 'message', 'website'];
  return ['name', 'email', 'company', 'budget', 'timeline', 'message', 'website'];
}

const ease = [0.2, 0.8, 0.2, 1];

export default function ContactSection() {
  const [intent, setIntent] = useState('project');
  const [form, setForm] = useState(emptyForm('project'));
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null); // { id, message }
  const [error, setError] = useState(null);     // { message, fields? }

  function switchIntent(next) {
    setIntent(next);
    setForm(emptyForm(next));
    setError(null);
  }

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    if (error?.fields?.[key]) {
      // Clear the field-level error as the user starts fixing it
      setError((e) => {
        if (!e) return e;
        const next = { ...e.fields };
        delete next[key];
        return { ...e, fields: Object.keys(next).length ? next : null };
      });
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const payload = { ...form, type: intent };
      // Drop the honeypot before sending if it's empty (it always should be).
      if (!payload.website) delete payload.website;

      const res = await submitInquiry(payload, controller.signal);
      setSuccess({ id: res.id, message: res.message });
      setForm(emptyForm(intent));
    } catch (err) {
      if (err.name === 'AbortError') {
        setError({ message: 'Request timed out. Please try again.' });
      } else if (err instanceof ApiError) {
        setError({ message: err.message, fields: err.fields });
      } else {
        setError({ message: 'Something went wrong. Please try again.' });
      }
    } finally {
      clearTimeout(timeout);
      setSubmitting(false);
    }
  }

  function fieldError(name) {
    if (!error?.fields) return null;
    const msgs = error.fields[name];
    return Array.isArray(msgs) ? msgs[0] : null;
  }

  const activeFields = fieldsForIntent(intent);

  return (
    <section id="contact" className="bg-brand-tealTint py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow mb-4"
          >
            Start a project
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-h1 text-brand-ink text-balance"
          >
            Tell us what you are <span className="text-brand-teal">working on</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-5 text-lead text-brand-muted text-pretty"
          >
            We reply within one working day. Pick the option that fits, and we will take it from there.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-soft p-6 md:p-10">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="text-center py-6"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-brand-tealTint text-brand-teal flex items-center justify-center mb-5">
                    <Check size={24} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-h3 text-brand-ink">Got it — talk soon.</h3>
                  <p className="mt-3 text-[0.9375rem] text-brand-muted max-w-sm mx-auto text-pretty">
                    {success.message}
                  </p>
                  <button
                    onClick={() => { setSuccess(null); setForm(emptyForm(intent)); }}
                    className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand-teal hover:text-brand-tealDeep transition"
                  >
                    Send another
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  onSubmit={onSubmit}
                  noValidate
                >
                  {/* Intent selector */}
                  <div className="flex flex-wrap gap-2 mb-7" role="tablist" aria-label="Inquiry type">
                    {INTENTS.map((i) => (
                      <button
                        key={i.id}
                        type="button"
                        role="tab"
                        aria-selected={intent === i.id}
                        onClick={() => switchIntent(i.id)}
                        className={[
                          'px-4 py-2 rounded-full text-[0.875rem] font-medium transition-all',
                          intent === i.id
                            ? 'bg-brand-teal text-white shadow-teal'
                            : 'bg-white text-brand-ink border border-brand-line hover:border-brand-teal hover:text-brand-teal',
                        ].join(' ')}
                      >
                        {i.label}
                      </button>
                    ))}
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="mb-5 flex items-start gap-2 rounded-card border border-red-200 bg-red-50 p-3.5 text-[0.875rem] text-red-700"
                    >
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{error.message}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {activeFields.includes('name') && (
                      <Field
                        label="Your name"
                        name="name"
                        value={form.name}
                        onChange={(v) => update('name', v)}
                        required
                        error={fieldError('name')}
                      />
                    )}
                    {activeFields.includes('email') && (
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(v) => update('email', v)}
                        required
                        error={fieldError('email')}
                      />
                    )}
                    {activeFields.includes('company') && (
                      <Field
                        label="Company"
                        name="company"
                        value={form.company}
                        onChange={(v) => update('company', v)}
                        error={fieldError('company')}
                      />
                    )}
                    {activeFields.includes('budget') && (
                      <Select
                        label="Budget"
                        name="budget"
                        value={form.budget}
                        onChange={(v) => update('budget', v)}
                        options={BUDGETS}
                        placeholder="Select a range"
                        error={fieldError('budget')}
                      />
                    )}
                    {activeFields.includes('timeline') && (
                      <Select
                        label="Timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={(v) => update('timeline', v)}
                        options={TIMELINES}
                        placeholder="When are you looking to start?"
                        error={fieldError('timeline')}
                      />
                    )}
                    {activeFields.includes('message') && (
                      <div className="sm:col-span-2">
                        <Field
                          label="Tell us about it"
                          name="message"
                          multiline
                          value={form.message}
                          onChange={(v) => update('message', v)}
                          required
                          error={fieldError('message')}
                        />
                      </div>
                    )}

                    {/* Honeypot — hidden from real users and screen readers */}
                    {activeFields.includes('website') && (
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                        <label>
                          Website
                          <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.website}
                            onChange={(e) => update('website', e.target.value)}
                          />
                        </label>
                      </div>
                    )}
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-[0.8125rem] text-brand-muted inline-flex items-center gap-1.5">
                      <Sparkles size={13} className="text-brand-teal" />
                      We reply within 24 hours.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FieldShell({ label, name, required, error, children }) {
  return (
    <label className="block">
      <span className="block text-[0.8125rem] font-medium text-brand-ink mb-1.5">
        {label}{required && <span className="text-brand-teal"> *</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-[0.75rem] text-red-600">{error}</span>
      )}
    </label>
  );
}

const inputClass =
  'w-full rounded-card border border-brand-line bg-white px-4 py-2.5 text-[0.95rem] text-brand-ink placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition';
const inputErrorClass = 'border-red-300 focus:border-red-500 focus:ring-red-500/15';

function Field({ label, name, type = 'text', value, onChange, required, multiline, error }) {
  return (
    <FieldShell label={label} name={name} required={required} error={error}>
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={[inputClass, 'resize-y min-h-[120px]', error && inputErrorClass].filter(Boolean).join(' ')}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={[inputClass, error && inputErrorClass].filter(Boolean).join(' ')}
        />
      )}
    </FieldShell>
  );
}

function Select({ label, name, value, onChange, options, placeholder, error }) {
  return (
    <FieldShell label={label} name={name} error={error}>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={[inputClass, 'appearance-none pr-10', !value && 'text-brand-muted/60', error && inputErrorClass].filter(Boolean).join(' ')}
      >
        <option value="">{placeholder}</option>
        {options.filter(Boolean).map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </FieldShell>
  );
}
