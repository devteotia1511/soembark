import { useState } from 'react';
import { ArrowUp, Share2, Globe, Mail, MessageCircle, Check, Loader2, ArrowRight } from 'lucide-react';
import { submitInquiry, ApiError } from '../lib/api';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Capabilities',   href: '#features' },
      { label: 'How it works',   href: '#process' },
      { label: 'Featured work',  href: '#proof' },
      { label: 'Pricing',        href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About',         href: '#about' },
      { label: 'Careers',       href: '#' },
      { label: 'Press',         href: '#' },
      { label: 'Contact',       href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Journal',       href: '#' },
      { label: 'Newsletter',    href: '#' },
      { label: 'Case studies',  href: '#' },
      { label: 'Brand kit',     href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy',  href: '#' },
      { label: 'Terms',    href: '#' },
      { label: 'Cookies',  href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const socials = [
  { Icon: Share2,       href: '#', label: 'Share' },
  { Icon: Globe,        href: '#', label: 'Website' },
  { Icon: Mail,         href: '#', label: 'Email' },
  { Icon: MessageCircle, href: '#', label: 'Chat' },
];

export default function Footer() {
  return (
    <footer
      id="about"
      className="bg-brand-white border-t border-brand-tealTint"
    >
      <div className="container-wide py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center" aria-label="SoEmbark home">
              <img
                src="/soembark-lockup.png"
                alt="SoEmbark"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="mt-5 text-[0.9375rem] text-brand-muted leading-relaxed max-w-sm text-pretty">
              A creative innovation studio helping ambitious teams design, build, and launch
              the things that move them forward.
            </p>

            <NewsletterForm />

            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-brand-line text-brand-ink hover:text-brand-teal hover:border-brand-teal flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-eyebrow uppercase text-brand-ink mb-4">
                  {col.title}
                </div>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.9375rem] text-brand-muted hover:text-brand-teal transition"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-brand-lineSoft flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8125rem] text-brand-muted">
            © {new Date().getFullYear()} SoEmbark. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-brand-ink hover:text-brand-teal transition"
          >
            Back to top
            <span className="h-7 w-7 rounded-full border border-brand-line flex items-center justify-center">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | success | error
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('sending');
    setMessage('');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      await submitInquiry({ type: 'newsletter', email: email.trim() }, controller.signal);
      setState('success');
      setMessage('You are on the list.');
      setEmail('');
    } catch (err) {
      if (err instanceof ApiError && err.fields?.email) {
        setMessage(err.fields.email[0]);
      } else if (err.name === 'AbortError') {
        setMessage('Request timed out. Please try again.');
      } else {
        setMessage(err.message || 'Something went wrong.');
      }
      setState('error');
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-sm" noValidate>
      <label htmlFor="footer-newsletter-email" className="block text-eyebrow uppercase text-brand-ink mb-2">
        Newsletter
      </label>
      <div className="flex gap-2">
        <input
          id="footer-newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle'); }}
          placeholder="you@company.com"
          className="flex-1 min-w-0 rounded-full border border-brand-line bg-white px-4 py-2.5 text-[0.9rem] text-brand-ink placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/15 transition"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="btn-primary px-4 py-2.5 text-[0.875rem] disabled:opacity-60"
          aria-label="Subscribe to newsletter"
        >
          {state === 'sending' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : state === 'success' ? (
            <Check size={16} />
          ) : (
            <ArrowRight size={16} />
          )}
        </button>
      </div>
      {message && (
        <p
          className={[
            'mt-2 text-[0.75rem]',
            state === 'success' ? 'text-brand-teal' : 'text-red-600',
          ].join(' ')}
          role={state === 'error' ? 'alert' : 'status'}
        >
          {message}
        </p>
      )}
    </form>
  );
}
