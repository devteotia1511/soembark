import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services',  href: '#services' },
  { name: 'How it works', href: '#process' },
  { name: 'Work',       href: '#proof' },
  { name: 'About',      href: '#about' },
  { name: 'Contact',    href: '#contact' },
];

function LogoLockup({ iconOnly = false, className = '' }) {
  // iconOnly = use the SO badge alone (mobile nav, small spaces)
  if (iconOnly) {
    return (
      <img
        src="/soembark-icon.png"
        alt="SoEmbark"
        className={`h-12 w-12 rounded-[10px] object-cover ${className}`}
      />
    );
  }
  // full lockup: use the lockup image
  return (
    <a href="#top" aria-label="SoEmbark home" className={className}>
      <img
        src="/soembark-lockup.png"
        alt="SoEmbark"
        className="h-16 w-auto object-contain"
      />
    </a>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      const offset = 120;
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) current = id;
        }
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 w-full',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-nav border-b border-brand-line'
          : 'bg-white border-b border-transparent',
      ].join(' ')}
    >
      <nav className="container-wide flex items-center justify-between h-[72px] w-full">
        {/* Logo lockup */}
        <LogoLockup />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link inline-block"
                  style={isActive ? { color: '#1CABB0' } : undefined}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="btn-primary">
            Get started
          </a>
        </div>

        {/* Mobile: hamburger only */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsOpen((s) => !s)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink hover:border-brand-teal hover:text-brand-teal transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:hidden absolute inset-x-0 top-[72px] bg-white border-b border-brand-line shadow-card"
          >
            <div className="container-wide py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-2 text-[1.0625rem] font-medium text-brand-ink hover:text-brand-teal border-b border-brand-lineSoft last:border-0 transition"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-5 w-full"
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
