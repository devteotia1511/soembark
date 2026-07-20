import { motion } from 'framer-motion';
import { Compass, Layers, Rocket, Sparkles, ShieldCheck, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Strategic clarity',
    body: 'Cut through the noise. We turn ambitious ideas into focused product and brand strategies that teams can actually execute on.',
  },
  {
    icon: Layers,
    title: 'Design that travels',
    body: 'Identity systems, interfaces, and experiences built to scale — from first impression to long-term brand equity.',
  },
  {
    icon: Rocket,
    title: 'Built to ship',
    body: 'Modern engineering, performance-first. We build production-grade products that look as good as they feel.',
  },
  {
    icon: Sparkles,
    title: 'AI-native thinking',
    body: 'From workflows to product surfaces, we embed intelligence where it actually moves the needle for your team.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted partnership',
    body: 'Transparent, senior-only engagement. You work with the people doing the work — no layers, no handoffs.',
  },
  {
    icon: BarChart3,
    title: 'Outcomes over output',
    body: 'We measure what matters: activation, retention, revenue. Every decision is grounded in real signals.',
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Features() {
  return (
    <section id="features" className="bg-brand-white py-24 md:py-32">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow mb-4"
          >
            Why teams choose us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-h1 text-brand-ink text-balance"
          >
            A studio built for the way modern teams{' '}
            <span className="text-brand-teal">actually work</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-5 text-lead text-brand-muted text-pretty"
          >
            Six things we do differently — and the reasons our partners keep coming back.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="card-soft p-7 md:p-8 group"
            >
              <div className="h-12 w-12 rounded-card bg-brand-tealTint flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                <f.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 text-h3 text-brand-ink">{f.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-brand-muted text-pretty">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
