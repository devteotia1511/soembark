import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Discover',
    body: 'We dig in. Goals, audience, constraints, and the one thing that has to be true when this launches.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Concepts become systems — brand, product, and motion — built to scale and built to feel right.',
  },
  {
    n: '03',
    title: 'Build & launch',
    body: 'We ship production-grade work alongside your team, then stay close for the part that matters most: what happens after launch.',
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Process() {
  return (
    <section id="process" className="bg-brand-tealTint py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-h1 text-brand-ink text-balance"
          >
            A simple,{' '}
            <span className="text-brand-teal">honest</span> way to get from idea to launch.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent"
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full bg-white border border-brand-teal/30 shadow-soft flex items-center justify-center">
                  <span className="font-display font-bold text-[1.0625rem] text-brand-teal">
                    {s.n}
                  </span>
                  <span className="absolute -inset-1 rounded-full ring-1 ring-brand-teal/15" />
                </div>
              </div>
              <h3 className="mt-6 text-h3 text-brand-ink">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-brand-muted text-pretty max-w-sm">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
