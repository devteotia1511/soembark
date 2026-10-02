import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Star, Zap } from 'lucide-react';

const ease = [0.2, 0.8, 0.2, 1];

export default function InfluencerMarketing() {
  return (
    <section id="influencers" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Interactive Background Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#009999]/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="eyebrow mb-4">Amplification</p>
            <h2 className="text-h1 text-white text-balance mb-6 leading-tight">
              Influencer <span className="text-[#009999]">Marketing</span> that actually moves the needle.
            </h2>
            <p className="text-lead text-[#a7a9ac] mb-10 text-pretty leading-relaxed">
              We don't just find people with followers; we find creators with influence.
              Our approach blends data-driven selection with creative synergy to ensure your
              brand doesn't just appear in a feed, but starts a conversation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'Strategic Sourcing', body: 'Curated creators aligned with your brand values.' },
                { icon: Target, title: 'Precision Targeting', body: 'Reaching the exact audience that converts.' },
                { icon: TrendingUp, title: 'Performance Tracking', body: 'Real-time metrics that prove ROI.' },
                { icon: Star, title: 'Creative Synergy', body: 'Content that feels native, not forced.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
                  whileHover={{ y: -5, borderColor: '#009999' }}
                  className="flex gap-4 p-4 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] transition-all duration-300 cursor-default"
                >
                  <div className="h-10 w-10 rounded-lg bg-[#009999]/20 flex items-center justify-center text-[#009999] shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-[#a7a9ac] leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual/Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-[40px] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-[#009999]/20 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#009999] flex items-center justify-center text-white">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Growth Engine</h3>
                    <p className="text-xs text-[#a7a9ac]">Influencer Accelerator</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">142%</span>
                  <p className="text-[10px] uppercase text-[#009999] font-bold">Avg. ROI Increase</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: 'Creator Outreach', value: 95, color: 'bg-[#009999]' },
                  { label: 'Campaign Reach', value: 88, color: 'bg-[#00B3B3]' },
                  { label: 'Audience Trust', value: 72, color: 'bg-[#00B3B3]' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#a7a9ac]">{stat.label}</span>
                      <span className="text-white font-medium">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "circOut" }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 rounded-2xl bg-black/50 border border-white/5 text-center">
                <p className="text-sm text-[#a7a9ac] italic">
                  "The most seamless creator integration we've ever experienced."
                </p>
                <p className="text-xs font-bold text-white mt-2">— Global Brand Partner</p>
              </div>
            </div>

            {/* Decorative elements with floating animation */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 h-32 w-32 bg-[#009999]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 h-40 w-40 bg-[#009999]/10 rounded-full blur-3xl pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
