import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { LogoMarquee } from "../components/LogoMarquee";
import { CaseStudy } from "../components/CaseStudy";
import { ProofWall } from "../components/ProofWall";
import { ValueMetrics } from "../components/ValueMetrics";
import { ProcessFlow } from "../components/ProcessFlow";
import { WhoWeWorkWith } from "../components/WhoWeWorkWith";
import { ApplyForm } from "../components/ApplyForm";
import { Footer } from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-background text-foreground font-body antialiased">
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <CaseStudy />
        <ProofWall />
        <ValueMetrics />
        <ProcessFlow />
        <WhoWeWorkWith />
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}
