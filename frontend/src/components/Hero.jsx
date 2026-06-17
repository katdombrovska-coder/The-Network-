import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { TEXTURES } from "../data/evidence";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6"
    >
      {/* Background texture + glow */}
      <div className="absolute inset-0 -z-10">
        <img
          src={TEXTURES.hero}
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[#ed0584]/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300 mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#ed0584] animate-pulse" />
        Real-World Innovation Partnerships
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading font-black tracking-tighter leading-[1.25] text-3xl sm:text-4xl lg:text-5xl max-w-4xl text-balance"
      >
        We Connect Real-World Businesses
        <span className="block bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
          With Emerging Technology.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-7 max-w-xl text-base lg:text-lg text-zinc-400 leading-relaxed font-medium"
      >
        We create partnerships between businesses and emerging technologies that
        generate visibility, adoption, and real-world growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#apply"
          data-testid="hero-apply-btn"
          className="group inline-flex items-center gap-2 bg-white text-black font-semibold rounded-full px-7 py-3.5 hover:bg-zinc-200 transition-colors"
        >
          Apply for Partnership
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href="#case-study"
          data-testid="hero-casestudy-btn"
          className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold rounded-full px-7 py-3.5 hover:bg-white/5 transition-colors"
        >
          View Case Study
        </a>
      </motion.div>

      <motion.a
        href="#partners"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 text-zinc-500 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};
