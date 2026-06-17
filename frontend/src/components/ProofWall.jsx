import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { PROOF, FILTERS } from "../data/evidence";

const CategoryTag = ({ children }) => (
  <span className="inline-block rounded-full border border-white/15 bg-black/60 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-200">
    {children}
  </span>
);

const ImageCard = ({ item, onOpen }) => (
  <div
    data-testid={`proof-card-${item.id}`}
    onClick={() => onOpen(item)}
    className="break-inside-avoid mb-6 rounded-xl overflow-hidden border border-white/10 group relative cursor-pointer hover:border-white/30 transition-all duration-300"
  >
    <img
      src={item.src}
      alt={item.title}
      loading="lazy"
      className="w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-90" />
    <div className="absolute top-3 left-3">
      <CategoryTag>{item.category}</CategoryTag>
    </div>
    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="grid place-items-center w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20">
        <Maximize2 className="w-3.5 h-3.5 text-white" />
      </span>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="font-heading font-bold text-sm leading-snug">{item.title}</p>
      <p className="mt-1 text-[11px] text-zinc-400">{item.meta}</p>
    </div>
  </div>
);

const QuoteCard = ({ item }) => (
  <div
    data-testid={`proof-card-${item.id}`}
    className="break-inside-avoid mb-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 hover:border-white/30 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-4">
      <Quote className="w-6 h-6 text-[#facc15]" />
      <CategoryTag>{item.category}</CategoryTag>
    </div>
    <p className="font-heading text-lg font-semibold leading-snug text-balance">
      “{item.quote}”
    </p>
    <div className="mt-5">
      <p className="font-semibold text-sm">{item.author}</p>
      <p className="text-xs text-zinc-500">{item.role}</p>
    </div>
  </div>
);

const StatCard = ({ item }) => (
  <div
    data-testid={`proof-card-${item.id}`}
    className="break-inside-avoid mb-6 rounded-xl border border-[#facc15]/30 bg-[#facc15]/[0.06] p-7 hover:border-[#facc15]/60 transition-all duration-300"
  >
    <CategoryTag>{item.category}</CategoryTag>
    <p className="mt-4 font-mono text-6xl font-bold text-[#facc15]">{item.stat}</p>
    <p className="mt-3 font-heading font-bold leading-snug">{item.label}</p>
    <p className="mt-2 text-[11px] text-zinc-500">{item.meta}</p>
  </div>
);

export const ProofWall = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const items =
    filter === "All" ? PROOF : PROOF.filter((p) => p.category === filter);

  return (
    <section
      id="proof"
      data-testid="proof-section"
      className="scroll-mt-24 py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#facc15]">
          Proof of Execution
        </span>
        <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tighter">
          This is real. This happened.
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Not a pitch deck — receipts. Screenshots, press, on-chain transactions
          and testimonials from the people who were there.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            data-testid={`proof-filter-${f.toLowerCase()}`}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              filter === f
                ? "bg-white text-black"
                : "border border-white/15 text-zinc-400 hover:text-white hover:border-white/30"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div
        data-testid="proof-masonry-grid"
        className="columns-1 sm:columns-2 lg:columns-3 gap-6"
      >
        {items.map((item) => {
          if (item.type === "image")
            return <ImageCard key={item.id} item={item} onOpen={setActive} />;
          if (item.type === "quote")
            return <QuoteCard key={item.id} item={item} />;
          return <StatCard key={item.id} item={item} />;
        })}
      </div>

      {/* Lightbox */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          data-testid="proof-lightbox"
          className="max-w-2xl bg-[#0a0a0a] border-white/10 p-0 overflow-hidden"
        >
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">{active.meta}</DialogDescription>
              <img
                src={active.src}
                alt={active.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
              <div className="p-5 border-t border-white/10">
                <p className="font-heading font-bold">{active.title}</p>
                <p className="text-xs text-zinc-500 mt-1">{active.meta}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
