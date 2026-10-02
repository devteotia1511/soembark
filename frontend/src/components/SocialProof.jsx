import { motion } from 'framer-motion';
import { Users, Compass, Rocket } from 'lucide-react';

const stats = [
  { v: '2026',     l: 'Founded' },
  { v: '4',        l: 'Practice areas' },
  { v: '<24h',     l: 'Reply time' },
  { v: '100%',     l: 'Senior-led' },
];

const expectations = [
  {
    icon: Users,
    title: 'Senior-only team',
    body: 'You work with the people doing the work. No layered account managers, no handoffs to juniors once the contract is signed.',
  },
  {
    icon: Compass,
    title: 'Strategy first',
    body: "We figure out what you're actually building before a single pixel. That clarity is what the rest of the work is built on.",
  },
  {
    icon: Rocket,
    title: 'We ship',
    body: 'Production-grade work, end to end — strategy, design, code, and the unglamorous work of getting it into the world.',
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function SocialProof() {
  return (
    <section id="proof" className="bg-black py-24 md:py-32">
      <div className="container-wide">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 pb-20 border-b border-[#1a1a1a]">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="text-center md:text-left"
            >
              <div className="font-display font-bold text-[clamp(2.5rem,4.5vw,3.5rem)] leading-none text-[#009999]">
                {s.v}
              </div>
              <div className="mt-3 text-[0.9375rem] text-[#a7a9ac]">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* What you can expect */}
        <div className="mt-20 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow mb-4"
          >
            What you can expect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-h1 text-white text-balance"
          >
            Honest, senior, and{' '}
            <span className="text-[#009999]">built to ship</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-5 text-lead text-[#a7a9ac] text-pretty"
          >
            Three commitments we make to every partner — and the standard we hold ourselves to.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {expectations.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
              className="card-soft p-7 md:p-8 group"
            >
              <div className="h-12 w-12 rounded-card bg-[#1a1a1a] flex items-center justify-center text-[#009999] group-hover:bg-[#009999] group-hover:text-white transition-colors duration-300">
                <e.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 text-h3 text-white">{e.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#a7a9ac] text-pretty">
                {e.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
