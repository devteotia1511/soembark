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
  { id: 'creative',   name: 'Creative Design' },
  { id: 'content',    name: 'Content & Campaigns' },
  { id: 'digital',    name: 'Digital Experiences' },
  { id: 'innovation', name: 'Innovation' },
];

const services = {
  creative: [
    { name: 'Graphic Design',        icon: PenTool,  body: 'Visuals that feel inevitable — clean, confident, and unmistakably yours.' },
    { name: 'Brand Identity',        icon: Image,    body: 'Identity systems built to scale across every surface, screen, and moment.' },
    { name: 'Visual Storytelling',   icon: BookOpen, body: 'Narratives, decks, and key visuals that translate strategy into story.' },
    { name: 'Motion Design',         icon: Film,     body: 'Movement that gives brands a pulse — from micro-interactions to film.' },
  ],
  content: [
    { name: 'Video Editing',                 icon: Video,    body: 'Edits with rhythm, pace, and intent — for launches, ads, and social.' },
    { name: 'Creative Campaigns',            icon: Megaphone, body: 'Campaigns that earn attention and reward it with meaning.' },
    { name: 'Creative Writing',              icon: PenTool,   body: 'Copy that sounds like a human wrote it — because we did.' },
    { name: 'Brand Positioning',             icon: Compass,   body: 'A clear, ownable place in the market that your team can defend.' },
    { name: 'Campaign Strategy',             icon: Target,    body: 'Channel strategy, message architecture, and the right moment to ship.' },
    { name: 'Commercial Production',         icon: Camera,    body: 'Full-service production for ads, brand films, and product launches.' },
    { name: 'Content Strategy',              icon: FileText,  body: 'Editorial systems that keep your story consistent across every channel.' },
    { name: 'Social Media Strategy',         icon: Share2,    body: 'Platform-native playbooks that turn scrolling into signal.' },
    { name: 'Brand Communication',           icon: MessageSquare, body: 'Voice, tone, and messaging frameworks that travel across teams.' },
    { name: 'Performance Campaign Concepts', icon: TrendingUp, body: 'Creative concepts engineered for paid performance and conversion.' },
    { name: 'Ad Films',                      icon: Film,      body: 'Short-form films that move people — and the metrics that follow.' },
    { name: 'Content Writing',               icon: BookOpen,  body: 'Long-form, short-form, and everything in between — written with intent.' },
    { name: 'Social Media Management',       icon: Layers,    body: 'Day-to-day publishing, community, and the work of staying in the room.' },
    { name: 'Influencer Collaborations',     icon: Users,     body: 'Creator partnerships that feel natural, perform well, and build trust.' },
    { name: 'Marketing Strategy',            icon: BarChart,  body: 'Quarterly and launch-led marketing strategy grounded in real signals.' },
  ],
  digital: [
    { name: 'Website Design',         icon: Layout,   body: 'Marketing sites, landing pages, and microsites designed to convert.' },
    { name: 'Product Design',         icon: PenTool,  body: 'End-to-end product design — from research to polished, shippable UI.' },
    { name: 'UI/UX',                  icon: Wand2,    body: 'Interfaces that feel obvious in hindsight and delightful in the moment.' },
    { name: 'Creative Automation',    icon: Workflow, body: 'Reusable systems, templates, and pipelines that move faster every round.' },
    { name: 'Frontend Development',   icon: Code2,    body: 'Production-grade frontends — fast, accessible, and built to last.' },
    { name: 'AI Integration',         icon: Cpu,      body: 'Practical AI features that fit the product and earn user trust.' },
    { name: 'Digital Transformation', icon: Globe,    body: 'Modernising legacy surfaces without losing what already works.' },
  ],
  innovation: [
    { name: 'Innovation Consulting', icon: Lightbulb, body: 'Workshops, research, and strategy to find the next thing worth building.' },
    { name: 'Future Branding',       icon: Sparkles,  body: 'Brands designed for what comes next — not just what already exists.' },
    { name: 'Product Innovation',    icon: Rocket,    body: 'From idea to prototype to a credible path to market.' },
  ],
};

const ease = [0.2, 0.8, 0.2, 1];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('content');

  return (
    <section id="services" className="bg-brand-white py-24 md:py-32 relative overflow-hidden">
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
            className="text-h1 text-brand-ink text-balance"
          >
            Services built for{' '}
            <span className="text-brand-teal">ambitious</span> teams.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-5 text-lead text-brand-muted text-pretty"
          >
            Four practice areas, one team. Pick where you are right now — we'll meet you there.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={[
                  'px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[0.875rem] sm:text-[0.95rem] font-medium transition-all',
                  isActive
                    ? 'bg-brand-teal text-white shadow-teal'
                    : 'bg-brand-tealTint text-brand-tealDeep hover:bg-white hover:shadow-soft border border-transparent hover:border-brand-line',
                ].join(' ')}
              >
                {category.name}
              </button>
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease }}
                className="card-soft p-6 md:p-7 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-12 w-12 rounded-card bg-brand-tealTint flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                    <service.icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="h-9 w-9 rounded-full bg-brand-tealTint/60 flex items-center justify-center text-brand-teal opacity-0 group-hover:opacity-100 group-hover:bg-brand-tealTint transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <h3 className="text-h3 text-brand-ink">{service.name}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-brand-muted text-pretty">
                  {service.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-[0.9375rem] text-brand-muted">
            Not sure where to start?{' '}
            <a href="#contact" className="text-brand-teal font-semibold hover:text-brand-tealDeep">
              Tell us what you're working on →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
