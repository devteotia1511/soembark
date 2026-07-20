import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ease = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-brand-white pt-[120px] md:pt-[140px] pb-20 md:pb-28 w-full max-w-full"
    >
      {/* Soft teal blob backdrop for depth */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[520px] md:h-[520px] teal-blob max-w-none pointer-events-none opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 left-0 w-[250px] h-[250px] md:w-[420px] md:h-[420px] teal-blob max-w-none pointer-events-none opacity-50"
        style={{ animation: 'softFloat 7s ease-in-out infinite' }}
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-tealTint text-brand-tealDeep text-[0.8125rem] font-medium mb-6"
            >
              <Sparkles size={14} />
              <span>A new chapter for ambitious brands</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="text-display text-brand-ink text-balance"
            >
              Launch with{' '}
              <span className="text-brand-teal">confidence</span>,
              <br className="hidden sm:block" /> build what comes{' '}
              <span className="text-brand-teal">next</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-6 text-lead text-brand-muted max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              SoEmbark is a creative innovation studio partnering with founders and
              modern teams to design, build, and grow products people genuinely love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary">
                Start a project
                <ArrowRight size={18} />
              </a>
              <a href="#process" className="btn-ghost">
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="mt-10 flex items-center gap-5 justify-center lg:justify-start text-[0.8125rem] text-brand-muted"
            >
              <div className="flex -space-x-2">
                {['#1CABB0', '#158A8E', '#3FC2C7', '#0E7A7E'].map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>Trusted by 120+ teams worldwide</span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="lg:col-span-5 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-[480px] mx-auto overflow-visible">
      {/* Soft teal-tinted shape behind the visual */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[40px] bg-brand-tealTint"
        style={{ transform: 'rotate(-4deg)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-brand-tealTint to-white border border-brand-line"
        style={{ transform: 'rotate(2deg)' }}
      />

      {/* Foreground card */}
      <div className="absolute inset-0 rounded-[32px] bg-white shadow-card-hover border border-brand-line overflow-hidden">
        <div className="h-10 flex items-center gap-1.5 px-4 border-b border-brand-lineSoft">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <img
              src="/soembark-icon.png"
              alt=""
              className="h-7 w-7 rounded-[8px] object-cover"
            />
            <span className="font-display font-semibold text-brand-ink text-[0.95rem]">
              Embark Studio
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-card bg-brand-tealTint p-4">
              <div className="text-eyebrow text-brand-tealDeep mb-1.5">Active</div>
              <div className="text-[0.95rem] font-semibold text-brand-ink">Brand Sprint · Q3</div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white overflow-hidden">
                <div className="h-full w-[68%] rounded-full bg-brand-teal" />
              </div>
            </div>

            <div className="rounded-card border border-brand-lineSoft p-4">
              <div className="text-eyebrow text-brand-muted mb-1.5">Next up</div>
              <div className="text-[0.95rem] font-semibold text-brand-ink">Product Design</div>
              <div className="mt-1.5 text-[0.8125rem] text-brand-muted">Starts in 3 days</div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              {[
                { label: 'Design', on: true },
                { label: 'Build',  on: false },
                { label: 'Ship',   on: false },
              ].map((s) => (
                <div
                  key={s.label}
                  className={[
                    'rounded-card px-2.5 py-2 text-center text-[0.75rem] font-medium',
                    s.on
                      ? 'bg-brand-teal text-white'
                      : 'bg-brand-tealTint text-brand-tealDeep',
                  ].join(' ')}
                >
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 bottom-12 rounded-card bg-white shadow-card-hover border border-brand-line px-4 py-3 flex items-center gap-3"
      >
        <div className="h-9 w-9 rounded-full bg-brand-tealTint flex items-center justify-center text-brand-tealDeep font-semibold">
          ★
        </div>
        <div>
          <div className="text-[0.8125rem] font-semibold text-brand-ink">4.9 / 5.0</div>
          <div className="text-[0.75rem] text-brand-muted">Client rating</div>
        </div>
      </motion.div>
    </div>
  );
}
