import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  PenTool,
  Image,
  Film,
  Video,
  Megaphone,
  BookOpen,
  Compass,
  Target,
  Layers,
  Camera,
  FileText,
  Share2,
  MessageSquare,
  TrendingUp,
  BarChart,
  Users,
  Lightbulb,
  Rocket,
  Code2,
  Cpu,
  Workflow,
  Layout,
  Globe,
  Sparkles,
  LineChart,
  Wand2,
} from 'lucide-react';

const categories = [
  { id: 'growth',   name: 'Growth & Strategy' },
  { id: 'creative',  name: 'Creative Production' },
  { id: 'influence', name: 'Influence & Social' },
  { id: 'bundle',    name: 'The Works' },
];

const services = {
  growth: [
    { name: 'AD Campaign',        icon: Target,  body: 'Precision-engineered ads that stop the scroll and drive measurable conversion.' },
    { name: 'Brand Campaign',      icon: Megaphone, body: 'High-concept campaigns that define your identity and dominate the market.' },
    { name: 'Marketing Strategy', icon: TrendingUp, body: 'Launch-led blueprints grounded in real signals and data.' },
  ],
  creative: [
    { name: 'Graphic Designing',   icon: PenTool,  body: 'Visuals that feel inevitable — clean, confident, and unmistakably yours.' },
    { name: 'Video Editing',       icon: Film,     body: 'Edits with rhythm, pace, and intent — for launches, ads, and social.' },
    { name: 'Visual Storytelling', icon: Image,    body: 'Narratives and key visuals that translate strategy into story.' },
  ],
  influence: [
    { name: 'Influencer Marketing', icon: Users,  body: 'Creator partnerships that feel natural, perform well, and build trust.' },
    { name: 'Social Media Management', icon: Share2, body: 'Day-to-day publishing and community work to keep you in the room.' },
    { name: 'Brand Positioning',     icon: Compass,  body: 'A clear, ownable place in the market that your team can defend.' },
  ],
  bundle: [
    { name: 'The All-In Bundle',    icon: Sparkles, body: 'Every single service we offer, integrated into one powerhouse engine for your brand.' },
  ],
};

const ease = [0.2, 0.8, 0.2, 1];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('growth');

  return (
    <section id="services" className="bg-black py-24 md:py-32 relative overflow-hidden">
      <div className="container-wide relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow mb-4"
          >
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-h1 text-white text-balance"
          >
            Services built for{' '}
            <span className="text-[#009999]">ambitious</span> teams.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-5 text-lead text-[#a7a9ac] text-pretty"
          >
            Four practice areas, one team. Pick where you are right now — we'll meet you there.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={[
                  'px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[0.875rem] sm:text-[0.95rem] font-medium transition-all relative',
                  isActive
                    ? 'bg-[#009999] text-white shadow-lg shadow-[#009999]/20'
                    : 'bg-[#1a1a1a] text-[#a7a9ac] hover:bg-[#222222] hover:text-white border border-transparent hover:border-[#333333]',
                ].join(' ')}
              >
                {category.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full border-2 border-[#009999] scale-110 opacity-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {services[activeCategory].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="card-soft p-6 md:p-7 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#009999]/0 via-transparent to-transparent group-hover:from-[#009999]/5 transition-all duration-500 pointer-events-none" />
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="h-12 w-12 rounded-card bg-[#1a1a1a] flex items-center justify-center text-[#009999] group-hover:bg-[#009999] group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-[#009999]/20">
                    <service.icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-[#1a1a1a]/60 flex items-center justify-center text-[#009999] opacity-0 group-hover:opacity-100 group-hover:bg-[#009999] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <h3 className="text-h3 text-white relative z-10">{service.name}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-[#a7a9ac] text-pretty relative z-10">
                  {service.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-[0.9375rem] text-[#a7a9ac]">
            Not sure where to start?{' '}
            <a href="#contact" className="text-[#009999] font-semibold hover:text-[#00B3B3]">
              Tell us what you're working on →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
