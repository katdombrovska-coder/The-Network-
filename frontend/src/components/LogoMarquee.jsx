import { PARTNERS } from "../data/evidence";

export const LogoMarquee = () => {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section
      id="partners"
      data-testid="partner-logos-marquee"
      className="py-16 md:py-20 border-y border-white/10 bg-[#070707] overflow-hidden"
    >
      <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-zinc-500 mb-10 px-6">
        The ecosystems, brands & networks we operate inside
      </p>
      <div className="marquee-pause relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 items-center gap-16 pr-16 animate-marquee">
          {row.map((p, i) => (
            <span
              key={i}
              className="font-heading text-2xl md:text-3xl font-bold whitespace-nowrap text-zinc-600 hover:text-white transition-colors duration-300"
            >
              {p}
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-16 pr-16 animate-marquee"
        >
          {row.map((p, i) => (
            <span
              key={`b-${i}`}
              className="font-heading text-2xl md:text-3xl font-bold whitespace-nowrap text-zinc-600 hover:text-white transition-colors duration-300"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
