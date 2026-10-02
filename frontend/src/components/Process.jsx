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
    <section id="process" className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
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
            className="text-h1 text-white text-balance"
          >
            A simple,{' '}
            <span className="text-[#009999]">honest</span> way to get from idea to launch.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-[#1a1a1a]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="h-full bg-gradient-to-r from-transparent via-[#009999] to-transparent"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="relative group"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full bg-black border border-[#333333] shadow-soft flex items-center justify-center group-hover:border-[#009999] transition-colors duration-300">
                  <span className="font-display font-bold text-[1.0625rem] text-[#009999]">
                    {s.n}
                  </span>
                  <span className="absolute -inset-1 rounded-full ring-1 ring-[#009999]/15" />
                </div>
              </div>
              <h3 className="mt-6 text-h3 text-white group-hover:text-[#009999] transition-colors duration-300">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-[#a7a9ac] text-pretty max-w-sm">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
