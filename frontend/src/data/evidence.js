// Real evidence pulled from the WalletConnect x 94 Coffee collaboration.
// Sources: WalletConnect X posts, Solana repost, CoinEdition PR, WalletConnect blog.

export const SCREENSHOTS = {
  acceptCrypto:
    "https://customer-assets.emergentagent.com/job_e309223b-9dfa-4113-ac3d-43e9c3945f23/artifacts/8vv40dmu_photo_2026-06-17%2017.05.28.jpeg",
  barista:
    "https://customer-assets.emergentagent.com/job_e309223b-9dfa-4113-ac3d-43e9c3945f23/artifacts/am6tb1g8_photo_2026-06-17%2017.05.39.jpeg",
  liveLisbon:
    "https://customer-assets.emergentagent.com/job_e309223b-9dfa-4113-ac3d-43e9c3945f23/artifacts/zejg71tr_photo_2026-06-17%2017.05.41.jpeg",
  receipt:
    "https://customer-assets.emergentagent.com/job_e309223b-9dfa-4113-ac3d-43e9c3945f23/artifacts/irrj8cep_photo_2026-06-17%2017.05.43.jpeg",
  solana:
    "https://customer-assets.emergentagent.com/job_e309223b-9dfa-4113-ac3d-43e9c3945f23/artifacts/h3ds6oth_photo_2026-06-17%2017.05.47.jpeg",
  ceoVisit:
    "https://customer-assets.emergentagent.com/job_opportunity-engine-24/artifacts/qir4azfp_photo_2026-06-17%2019.20.42.jpeg",
  ceoFirstStore:
    "https://customer-assets.emergentagent.com/job_opportunity-engine-24/artifacts/7czmukmd_photo_2026-06-17%2019.21.03.jpeg",
};

export const TEXTURES = {
  hero: "https://images.unsplash.com/photo-1693648793394-0b76b7eb042e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBsdXh1cnklMjB0ZXh0dXJlfGVufDB8fHx8MTc4MTYyMDQ5Mnww&ixlib=rb-4.1.0&q=85",
  satin: "https://images.pexels.com/photos/21926654/pexels-photo-21926654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  coffeeShop: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBzcGVjaWFsdHklMjBjb2ZmZWUlMjBzaG9wJTIwZGFya3xlbnwwfHx8fDE3ODE3MTU2NzJ8MA&ixlib=rb-4.1.0&q=85",
};

export const PARTNERS = [
  "WalletConnect",
  "Solana",
  "94° Coffee",
  "CoinEdition",
  "SBC Summit Lisbon",
  "MetaMask",
  "web4city.xyz",
  "Sandbox",
  "BingX",
  "Celo",
  "Polygon",
  "Safe Wallet",
  "Coinbase",
  "Scroll",
  "1inch",
  "Ton Festival",
  "NFC",
  "Biconomy",
];

export const MEDIA_NETWORKS = [
  "BeInCrypto",
  "CoinMarketCap",
  "Chainwire",
  "MediaFuse",
  "DSRPTD",
  "Coin Edition",
  "GamingWire",
  "Cyber NewsWire",
  "Binance",
  "Benzinga",
  "Block Tides",
  "Business Insider",
  "Dataconomy",
  "Cointelegraph",
  "ChainBits",
  "CryptoEvents",
  "CryptoGames",
  "Financial News",
];

export const FILTERS = [
  "All",
  "Broadcast",
  "Founder Access",
  "Screenshot",
  "Press",
  "On-Chain",
  "Testimonial",
  "Ecosystem",
];

export const LINKS = {
  coinEdition:
    "https://coinedition.com/94-becomes-portugals-first-nft-based-specialty-coffee-membership/",
  walletConnectBlog:
    "https://walletconnect.com/blog/how-94-coffee-uses-walletconnect-pay-to-settle-transactions",
  ninetyFour: "https://ninetyfourdegrees.com/",
  schwabNYSE: "https://x.com/SchwabNetwork/status/2011104443245208061",
  ninetyFourReply: "https://x.com/ninetyfourdgrs/status/2011115593957585269",
};

// Press placements — shown as a clickable external-verification row in the case study.
export const PRESS = [
  {
    source: "Schwab Network",
    outcome: "National TV — NYSE",
    title: "94° × WalletConnect featured live from the New York Stock Exchange",
    url: LINKS.schwabNYSE,
  },
  {
    source: "CoinEdition",
    outcome: "Media Coverage",
    title: "94° Becomes Portugal’s First NFT-Based Specialty Coffee Membership",
    url: LINKS.coinEdition,
  },
  {
    source: "WalletConnect Blog",
    outcome: "Official Partner Announcement",
    title: "How 94° Coffee Uses WalletConnect Pay to Settle Transactions",
    url: LINKS.walletConnectBlog,
  },
  {
    source: "94° Coffee",
    outcome: "Venue Partner",
    title: "ninetyfourdegrees.com — the partner brand",
    url: LINKS.ninetyFour,
  },
];

// Masonry proof wall — mix of real screenshots, real quotes & on-chain receipts.
export const PROOF = [
  {
    id: "p0",
    type: "broadcast",
    category: "Broadcast",
    network: "Schwab Network · live from the NYSE",
    headline: "94° × WalletConnect, on national financial television.",
    body: "WalletConnect CEO Jess Houlgrave joined Schwab Network — broadcast from the New York Stock Exchange — to discuss mainstream stablecoin payments at physical checkout. 94° Coffee replied on the broadcast: “Guess the coffee shop ;) 94° x WalletConnect.”",
    meta: "Schwab Network · X · Jan 13, 2026",
    url: LINKS.schwabNYSE,
    sourceLabel: "Watch on Schwab Network",
  },
  {
    id: "p10",
    type: "image",
    category: "Founder Access",
    src: SCREENSHOTS.ceoVisit,
    title: "WalletConnect’s CEO bought coffee at 94° with WalletConnect Pay.",
    meta: "Jess Houlgrave · CEO, WalletConnect · X · 6.5K views · 46 likes",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the WalletConnect story",
  },
  {
    id: "p11",
    type: "image",
    category: "Founder Access",
    src: SCREENSHOTS.ceoFirstStore,
    title: "“WalletConnect Pay is live in its first store at 94° — and it’s one of my favourite spots.”",
    meta: "Jess Houlgrave · CEO, WalletConnect · X · Jan 18",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the WalletConnect story",
  },
  {
    id: "p1",
    type: "image",
    category: "Screenshot",
    src: SCREENSHOTS.acceptCrypto,
    title: "“It’s time to accept crypto.”",
    meta: "WalletConnect · X · 198.6K views · 8.6K likes",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the WalletConnect story",
  },
  {
    id: "p2",
    type: "quote",
    category: "Testimonial",
    quote:
      "Crypto payments allow for faster settlement and fewer intermediaries. It just makes sense, especially for a business like ours that values efficiency and modern tools.",
    author: "Illia Akulov",
    role: "Founder, 94° Coffee · via WalletConnect Blog",
    url: LINKS.walletConnectBlog,
    sourceLabel: "WalletConnect Blog",
  },
  {
    id: "p3",
    type: "image",
    category: "Press",
    src: SCREENSHOTS.barista,
    title: "X Article: How 94° Coffee Uses WalletConnect Pay",
    meta: "WalletConnect · X Article · 83K views · 207 likes",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the article",
  },
  {
    id: "p4",
    type: "image",
    category: "Ecosystem",
    src: SCREENSHOTS.solana,
    title: "Reposted by Solana — “A coffee, paid onchain in seconds.”",
    meta: "Solana · X · 97K views · 1.2K likes",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the WalletConnect story",
  },
  {
    id: "p5",
    type: "quote",
    category: "Press",
    quote:
      "The introduction of 94° NFT Memberships is a logical next step for a brand that’s already at the heart of Lisbon’s Web3 movement.",
    author: "Ahmed Refaie",
    role: "Founder, Dsrptd.net (Dubai) · via CoinEdition",
    url: LINKS.coinEdition,
    sourceLabel: "Read on CoinEdition",
  },
  {
    id: "p6",
    type: "image",
    category: "On-Chain",
    src: SCREENSHOTS.receipt,
    title: "Settled on-chain — ETH receipt, Ethereum network",
    meta: "WalletConnect Pay · Real transaction receipt",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the WalletConnect story",
  },
  {
    id: "p7",
    type: "image",
    category: "Screenshot",
    src: SCREENSHOTS.liveLisbon,
    title: "“WalletConnect Pay is now LIVE at 94° Coffee in Lisbon”",
    meta: "Pay with USDC, ETH, SOL, BNB, MON or POL · 25K views",
    url: LINKS.ninetyFour,
    sourceLabel: "Visit 94° Coffee",
  },
  {
    id: "p8",
    type: "quote",
    category: "Testimonial",
    quote:
      "Being first in Lisbon’s Web3 culture means being first in coffee too. 94° was built to be a hub where innovation and community meet.",
    author: "Taras Tunskyy",
    role: "Co-founder, 94° Coffee · via CoinEdition",
    url: LINKS.coinEdition,
    sourceLabel: "Read on CoinEdition",
  },
  {
    id: "p9",
    type: "stat",
    category: "Ecosystem",
    stat: "1st",
    label: "Physical merchant partner ever onboarded to WalletConnect Pay",
    meta: "WalletConnect Blog · Official announcement",
    url: LINKS.walletConnectBlog,
    sourceLabel: "Read the announcement",
  },
];

export const VALUE = [
  {
    k: "Brand Exposure",
    v: "500K+",
    sub: "Combined impressions across WalletConnect & Solana posts featuring the partner.",
    span: "lg:col-span-2",
  },
  {
    k: "Ecosystem Reach",
    v: "5",
    sub: "Networks live in one launch: Ethereum, Arbitrum, Optimism, BNB Chain, Solana.",
    span: "",
  },
  {
    k: "Industry First",
    v: "#1",
    sub: "First-ever physical merchant for WalletConnect Pay — globally.",
    span: "",
  },
  {
    k: "Media Coverage",
    v: "4+",
    sub: "Placements incl. Schwab Network (NYSE), CoinEdition, WalletConnect Blog & X Article.",
    span: "",
  },
  {
    k: "National TV — NYSE",
    v: "NYSE",
    sub: "Featured on Schwab Network, broadcast from the New York Stock Exchange floor.",
    span: "",
  },
  {
    k: "Conference Access",
    v: "SBC",
    sub: "Activated during SBC Summit Lisbon — placed in front of global founders & investors.",
    span: "lg:col-span-2",
  },
];

export const PROCESS = [
  {
    n: "01",
    t: "Find the Right Match",
    d: "We identify businesses and technologies that can create meaningful value for each other.",
  },
  {
    n: "02",
    t: "Make the Introduction",
    d: "We connect decision-makers who would likely never meet otherwise.",
  },
  {
    n: "03",
    t: "Create the Opportunity",
    d: "We shape the collaboration into something both sides want to launch.",
  },
  {
    n: "04",
    t: "Activate the Ecosystem",
    d: "Communities, founders, media, conferences, and customers become aware of the partnership.",
  },
  {
    n: "05",
    t: "Generate Visibility",
    d: "The collaboration gains exposure through media, events, communities, and ecosystem channels.",
  },
  {
    n: "06",
    t: "Create Long-Term Value",
    d: "The partnership continues generating opportunities long after launch.",
  },
];

export const AUDIENCE_BUSINESSES = [
  "Cafés & Restaurants",
  "Hotels & Hospitality",
  "Coworking Spaces",
  "Event Venues",
  "Lifestyle Brands",
];

export const AUDIENCE_ECOSYSTEMS = [
  "Startups",
  "AI Companies",
  "Web3 Protocols",
  "Accelerators",
  "Venture Funds",
  "Conferences",
  "Communities",
];
