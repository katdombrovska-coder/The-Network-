export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 bg-[#050505] px-6 md:px-12 lg:px-24 py-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <img
              src="/web4city-logo.png"
              alt="WEB4CITY"
              className="h-9 w-auto object-contain"
            />
            <span className="font-heading text-xl text-[#e8dcc8] leading-none">
              Agency
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
            We connect real-world businesses with emerging technology — building
            partnerships that generate visibility, adoption, and real-world
            growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4">
              Explore
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#case-study" className="hover:text-white transition-colors">Case Study</a></li>
              <li><a href="#proof" className="hover:text-white transition-colors">Proof of Execution</a></li>
              <li><a href="#value" className="hover:text-white transition-colors">Value Created</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4">
              Get Started
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#apply" className="hover:text-white transition-colors">Apply for Partnership</a></li>
              <li><a href="#who" className="hover:text-white transition-colors">Who We Work With</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} WEB4CITY — Real-World Innovation Partnerships</p>
        <p>Case study evidence: WalletConnect, Solana, 94° Coffee, CoinEdition.</p>
      </div>
    </footer>
  );
};
