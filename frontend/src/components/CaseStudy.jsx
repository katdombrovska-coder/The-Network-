import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { SCREENSHOTS, PRESS } from "../data/evidence";

const Overline = ({ children }) => (
  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ed0584]">
    {children}
  </span>
);

const Step = ({ tag, title, body }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="relative pl-6 border-l border-white/10"
  >
    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#ed0584]" />
    <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">
      {tag}
    </p>
    <h4 className="mt-1 font-heading text-xl font-bold">{title}</h4>
    <p className="mt-2 text-zinc-400 leading-relaxed">{body}</p>
  </motion.div>
);

const Polaroid = ({ src, className, rotate, caption }) => (
  <motion.figure
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ rotate: 0, y: -6, zIndex: 30 }}
    style={{ rotate: `${rotate}deg` }}
    className={`absolute rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}
  >
    <img src={src} alt={caption} className="w-full h-full object-cover" />
  </motion.figure>
);

export const CaseStudy = () => {
  return (
    <section
      id="case-study"
      data-testid="flagship-case-study"
      className="scroll-mt-24 py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <Overline>Flagship Case Study</Overline>
        <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tighter">
          WalletConnect × 94° Coffee
        </h2>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          How a specialty coffee shop in Lisbon became WalletConnect Pay’s
          first-ever physical merchant — and the face of crypto payments across
          five blockchains.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Narrative */}
        <div className="space-y-9 order-2 lg:order-1">
          <Step
            tag="The Opportunity"
            title="A global protocol needed its first real-world store."
            body="WalletConnect Pay was ready to go live in the physical world — but a launch is only as strong as the partner behind it. The right merchant had to be design-led, community-loved, and unmistakably credible."
          />
          <Step
            tag="The Introduction"
            title="We placed 94° at the center of Lisbon’s Web3 movement."
            body="Already the daily meeting point for builders and founders during SBC Summit Lisbon, 94° was positioned and introduced as the obvious choice — the first merchant partner WalletConnect would announce to the world."
          />
          <Step
            tag="The Partnership"
            title="Crypto, accepted here — across 5 networks at once."
            body="94° went live accepting USDC, ETH, SOL, BNB, MON and POL across Ethereum, Arbitrum, Optimism, BNB Chain and Solana. Real transactions, settled on-chain, in seconds."
          />
          <Step
            tag="The Exposure"
            title="Reposted by Solana. Covered by the press. Seen by the industry."
            body="The launch was amplified by WalletConnect, reposted by Solana, written up by CoinEdition, and turned into an official X Article — reaching hundreds of thousands across the ecosystem."
          />
        </div>

        {/* Collage */}
        <div className="order-1 lg:order-2 relative h-[460px] sm:h-[560px]">
          <Polaroid
            src={SCREENSHOTS.acceptCrypto}
            caption="It's time to accept crypto"
            rotate={-5}
            className="w-[56%] top-0 left-0"
          />
          <Polaroid
            src={SCREENSHOTS.barista}
            caption="94 Coffee barista"
            rotate={4}
            className="w-[52%] top-16 right-0"
          />
          <Polaroid
            src={SCREENSHOTS.solana}
            caption="Reposted by Solana"
            rotate={-3}
            className="w-[50%] bottom-0 left-6"
          />
          <Polaroid
            src={SCREENSHOTS.receipt}
            caption="On-chain receipt"
            rotate={6}
            className="w-[44%] bottom-10 right-2"
          />

          {/* Stat badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-40 backdrop-blur-xl bg-black/70 border border-white/15 rounded-2xl px-6 py-4 text-center shadow-2xl"
          >
            <p className="font-mono text-3xl font-bold text-white">198.6K</p>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              Views · single post
            </p>
          </motion.div>
        </div>
      </div>

      {/* Verifiable, external-source press row */}
      <div data-testid="press-links" className="mt-20">
        <div className="flex items-center justify-center gap-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-[#ed0584] shrink-0" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ed0584]">
            External Verification
          </span>
        </div>
        <p className="text-center text-sm md:text-base text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Every claim below is supported by public sources, screenshots,
          messages, and partnership evidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PRESS.map((p, i) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`press-link-${i}`}
              aria-label={`${p.outcome} — ${p.source} (opens in a new tab)`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 hover:border-[#ed0584]/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full border border-[#ed0584]/30 bg-[#ed0584]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#ed0584]">
                    {p.outcome}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {p.source}
                  </p>
                </div>
                <span className="grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/5 shrink-0 group-hover:bg-white group-hover:border-white transition-colors">
                  <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors" />
                </span>
              </div>
              <p className="mt-3 font-heading font-semibold leading-snug text-zinc-300 group-hover:text-white transition-colors">
                {p.title}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ed0584]">
                Verify source
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
