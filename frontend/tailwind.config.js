/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand palette — Airbnb-clean with teal signature
        brand: {
          teal:       '#1CABB0',
          tealDeep:   '#158A8E',
          tealTint:   '#E6F7F7',
          tealMist:   '#F2FBFB',
          white:      '#FFFFFF',
          ink:        '#333333',
          muted:      '#6B6B6B',
          line:       '#EFEFEF',
          lineSoft:   '#F5F5F5',
        },
      },
      borderRadius: {
        'pill':  '9999px',
        'card':  '16px',
        'card-lg': '20px',
        'badge': '14px',
      },
      maxWidth: {
        'container': '1200px',
        'wide':      '1280px',
      },
      boxShadow: {
        'soft':       '0 2px 8px rgba(15, 23, 42, 0.04)',
        'card':       '0 4px 16px -4px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 28px -8px rgba(15, 23, 42, 0.10), 0 2px 6px rgba(15, 23, 42, 0.05)',
        'teal':       '0 6px 18px -4px rgba(28, 171, 176, 0.35)',
        'teal-hover': '0 10px 24px -4px rgba(28, 171, 176, 0.45)',
        'nav':        '0 1px 0 rgba(15, 23, 42, 0.04), 0 4px 12px -4px rgba(15, 23, 42, 0.04)',
      },
      letterSpacing: {
        'tight-headline': '-0.025em',
        'label':          '0.04em',
      },
      fontSize: {
        // Slightly larger, more confident scale
        'display': ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1':      ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h2':      ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3':      ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body':    ['1.0625rem', { lineHeight: '1.6' }],
        'lead':    ['1.125rem', { lineHeight: '1.6' }],
        'small':   ['0.875rem', { lineHeight: '1.5' }],
        'eyebrow': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.12em', fontWeight: '600' }],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s cubic-bezier(.2,.8,.2,1) both',
        'fade-in':    'fadeIn 0.6s ease-out both',
        'underline':  'underline 0.3s cubic-bezier(.2,.8,.2,1) forwards',
        'soft-float': 'softFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        underline: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
