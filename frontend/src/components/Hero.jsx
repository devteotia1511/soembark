import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Megaphone, Users, Palette, Video, Share2 } from 'lucide-react';

const ease = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-black pt-[120px] md:pt-[140px] pb-20 md:pb-28 w-full max-w-full overflow-hidden"
    >
      {/* Dynamic Background Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] teal-blob opacity-40 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] teal-blob opacity-30 pointer-events-none"
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: ease }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1a1a] text-[#009999] text-[0.8125rem] font-medium mb-6 border border-[#333333]"
            >
              <Sparkles size={14} />
              <span className="tracking-wide">A new chapter for ambitious brands</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: ease }}
              className="text-display text-white text-balance leading-[1.1] tracking-tight"
            >
              Launch with{' '}
              <span className="text-[#009999] relative">
                confidence
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-[4px] bg-[#009999]/30 -z-10"
                />
              </span>,
              <br className="hidden sm:block" /> build what comes{' '}
              <span className="text-[#009999]">next</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: ease }}
              className="mt-6 text-lead text-[#a7a9ac] max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed"
            >
              SOEMBARK is a creative innovation studio partnering with founders and
              modern teams to design, build, and grow products people genuinely love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: ease }}
              className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a project
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#process"
                className="btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                See how it works
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: ease }}
              className="mt-12 flex items-center gap-5 justify-center lg:justify-start text-[0.8125rem] text-[#a7a9ac]"
            >
              <div className="flex -space-x-2">
                {['#009999', '#00B3B3', '#00CCCC', '#007777'].map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-black transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span className="font-medium">Trusted by 120+ teams worldwide</span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="lg:col-span-5 relative"
          >
            <InnovationNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InnovationNetwork() {
  const nodes = [
    { icon: Target, label: 'ADs', angle: 30, color: '#009999', delay: 0 },
    { icon: Megaphone, label: 'Brand', angle: 90, color: '#00B3B3', delay: 0.2 },
    { icon: Users, label: 'Influencers', angle: 150, color: '#00CCCC', delay: 0.4 },
    { icon: Palette, label: 'Design', angle: 210, color: '#007777', delay: 0.6 },
    { icon: Video, label: 'Video', angle: 270, color: '#00B3B3', delay: 0.8 },
    { icon: Share2, label: 'Social', angle: 330, color: '#009999', delay: 1 },
  ];

  const radius = 150;

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        animate={{
          boxShadow: ["0 0 20px rgba(0,153,153,0.2)", "0 0 60px rgba(0,153,153,0.5)", "0 0 20px rgba(0,153,153,0.2)"]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-30 h-24 w-24 rounded-full bg-black border-2 border-[#009999] flex items-center justify-center shadow-2xl"
      >
        <img
          src="/soembark-road-logo.png"
          alt="SoEmbark"
          className="h-16 w-16 object-contain p-2"
        />
      </motion.div>

      {/* Connection Lines & Nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
      >
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x2 = 300 + Math.cos(rad) * radius;
          const y2 = 300 + Math.sin(rad) * radius;
          return (
            <motion.line
              key={`line-${i}`}
              x1="300" y1="300"
              x2={x2} y2={y2}
              stroke={node.color}
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: node.delay, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <motion.div
            key={`node-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: node.delay + 0.5, ease: "backOut" }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              translateX: `${x}px`,
              translateY: `${y}px`,
              marginLeft: '-28px',
              marginTop: '-28px',
            }}
            className="group z-20"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              className="relative"
            >
              {/* Node Glow */}
              <div
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: node.color }}
              />

              {/* Node Body */}
              <div className="relative h-14 w-14 rounded-full bg-[#0a0a0a] border border-[#333333] flex items-center justify-center text-white transition-all duration-300 group-hover:border-[#009999] group-hover:scale-110 z-10 shadow-xl">
                <node.icon size={20} style={{ color: node.color }} className="group-hover:text-white transition-colors" />
              </div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.delay + 1 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-black/80 border border-[#333333] text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {node.label}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating Metric Badges - Pushed to the absolute corners of the container */}
      {[
        { text: '142% ROI', x: '2%', y: '2%', delay: 1.5 },
        { text: '120+ Teams', x: '85%', y: '2%', delay: 1.8 },
        { text: 'Senior Led', x: '85%', y: '92%', delay: 2.1 },
        { text: 'Innovation First', x: '2%', y: '92%', delay: 2.4 },
      ].map((badge, i) => (
        <motion.div
          key={`badge-${i}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: badge.delay }}
          style={{ left: badge.x, top: badge.y }}
          className="absolute px-3 py-1 rounded-full bg-[#009999]/10 border border-[#009999]/30 text-[#009999] text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm z-10"
        >
          {badge.text}
        </motion.div>
      ))}
    </div>
  );
}
