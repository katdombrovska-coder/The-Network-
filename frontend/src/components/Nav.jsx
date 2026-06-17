import { useState, useEffect } from "react";

const LINKS = [
  { label: "Case Study", href: "#case-study" },
  { label: "Proof", href: "#proof" },
  { label: "Value", href: "#value" },
  { label: "Process", href: "#process" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-1"
        >
          <img
            src="/web4city-logo.png"
            alt="WEB4CITY"
            className="h-7 md:h-8 w-auto object-contain"
          />
          <span className="font-heading text-2xl md:text-3xl text-[#e8dcc8] leading-none">
            Agency
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#apply"
          data-testid="nav-apply-btn"
          className="text-sm font-semibold bg-white text-black rounded-full px-5 py-2.5 hover:bg-zinc-200 transition-colors"
        >
          Apply for Partnership
        </a>
      </nav>
    </header>
  );
};
