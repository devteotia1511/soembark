import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ease = [0.2, 0.8, 0.2, 1];

export default function CTABanner() {
  return (
    <section id="contact" className="bg-[#009999] text-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(900px circle at 20% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(700px circle at 85% 80%, rgba(255,255,255,0.10), transparent 55%)',
        }}
      />

      <div className="container-wide relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="text-h1 text-white text-balance max-w-3xl mx-auto"
        >
          Ready to build something worth launching?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="mt-5 text-lead text-white/80 max-w-xl mx-auto text-pretty"
        >
          Tell us about your project. We reply within one working day — usually faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.16, ease }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a href="mailto:hello@soembark.com" className="btn-on-teal">
            Start a project
            <ArrowRight size={18} />
          </a>
          <a
            href="mailto:hello@soembark.com?subject=Booking%20a%20call"
            className="btn border-2 border-white/80 text-white hover:bg-white hover:text-[#009999] px-7 py-3.5 rounded-full text-[0.95rem] font-medium transition"
          >
            Book a call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
