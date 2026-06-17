import { motion } from "framer-motion";
import { AUDIENCE, TEXTURES } from "../data/evidence";

export const WhoWeWorkWith = () => {
  return (
    <section
      id="who"
      data-testid="target-audience-grid"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 h-[420px]"
        >
          <img
            src={TEXTURES.coffeeShop}
            alt="A business inside a thriving ecosystem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#facc15]">
              From local to global
            </p>
            <p className="mt-2 font-heading text-2xl font-bold max-w-xs">
              A single café became known across five blockchains. Yours could be
              next.
            </p>
          </div>
        </motion.div>

        {/* Audience list */}
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#facc15]">
            Who We Work With
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-black tracking-tighter">
            If you want access you can’t reach alone — we build the bridge.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {AUDIENCE.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                data-testid={`audience-${i}`}
                className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300 hover:border-[#facc15]/50 hover:text-white transition-colors"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
