import { motion } from "framer-motion";
import { VALUE } from "../data/evidence";

export const ValueMetrics = () => {
  return (
    <section
      id="value"
      data-testid="value-section"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="mb-14 max-w-2xl">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#facc15]">
          Value Created
        </span>
        <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tighter">
          Outcomes, not promises.
        </h2>
        <p className="mt-4 text-zinc-400">
          Every number below is backed by a real screenshot, article or on-chain
          transaction from the 94° × WalletConnect collaboration.
        </p>
      </div>

      <div
        data-testid="value-metrics-bento"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {VALUE.map((m, i) => (
          <motion.div
            key={m.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 ${m.span}`}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              {m.k}
            </p>
            <p className="mt-6 font-mono text-5xl lg:text-6xl font-bold tracking-tight">
              {m.v}
            </p>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{m.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
