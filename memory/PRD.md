# PRD — Ecosystem Partnership Program Landing Page ("The Network")

## Original Problem Statement
Build a premium, dark, venture-backed landing page for a strategic partnerships & ecosystem
growth company (placeholder brand). NOT a marketing/PR/event agency. It is an Ecosystem
Partnership Program / opportunity engine that creates partnerships, strategic introductions,
exposure, community access, conference opportunities and ecosystem positioning. The site is
built AROUND real uploaded evidence and positions the WalletConnect × 94° Coffee (Lisbon)
collaboration as the flagship case study and proof of execution. Visual direction: dark,
premium, inspired by Linear/Stripe/Vercel/Arc. Focus on credibility, outcomes, exclusivity.

## User Choices
- Placeholder brand (no real name) → used "The Network".
- Product = Ecosystem Partnership Program. Outcomes over services.
- Working "Apply for Partnership" form saved to backend.
- Dark premium theme.

## Architecture
- **Frontend**: React 19 + Tailwind, framer-motion, fontshare (Cabinet Grotesk / Satoshi / Azeret Mono), sonner toasts, Radix Dialog lightbox.
  - Components: Nav, Hero, LogoMarquee, CaseStudy (collage of real screenshots), ProofWall (masonry + filters + lightbox), ValueMetrics (bento), ProcessFlow (6-step), WhoWeWorkWith, ApplyForm, Footer. Page: pages/Landing.jsx. Data: data/evidence.js.
- **Backend**: FastAPI + MongoDB. `POST /api/applications` (save), `GET /api/applications` (list). Model: PartnershipApplication (name, email, company, business_type, ecosystem_interest, message, created_at).

## Implemented (2026-06-17)
- Full single-page dark landing site with all required sections.
- Real evidence (5 WalletConnect/Solana/94° screenshots + real quotes from CoinEdition/WalletConnect blog + on-chain receipt) featured throughout case study & proof wall.
- Proof of Execution masonry wall with category filters (All/Screenshot/Press/On-Chain/Testimonial/Ecosystem) + expandable lightbox.
- Apply for Partnership form with validation → persists to MongoDB. Verified e2e (100% backend 6/6, 100% frontend flows).

## Core Requirements (static)
- Evidence-first credibility; outcomes over services; exclusive/invite-only tone.

## Backlog / Next Tasks
- P1: Simple admin view (with auth) to review submitted applications.
- P1: Replace text wordmarks in social-proof marquee with real SVG logos if provided.
- P2: Add rate limiting / spam protection on the public form.
- P2: Email notification (Resend/SendGrid) on new application.
- P2: Embed real video clips / more screenshots as user uploads more evidence.
- Tech debt: migrate FastAPI on_event→lifespan; explicit CORS_ORIGINS for production.
