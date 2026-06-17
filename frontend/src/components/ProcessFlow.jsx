import { motion } from "framer-motion";
import { PROCESS } from "../data/evidence";

export const ProcessFlow = () => {
  return (
    <section
      id="process"
      data-testid="process-flow-timeline"
      className="scroll-mt-24 py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#070707] border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ed0584]">
            How It Works
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tighter">
            How an opportunity becomes reality.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {PROCESS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#101010] transition-colors"
            >
              <span className="font-mono text-sm text-[#ed0584]">{s.n}</span>
              <h3 className="mt-4 font-heading text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{s.d}</p>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ed0584] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
