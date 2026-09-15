import { CalculatorSection } from '../components/sections/CalculatorSection.jsx';
import { Comparison } from '../components/sections/Comparison.jsx';
import { CtaSection } from '../components/sections/CtaSection.jsx';
import { EscrowSection } from '../components/sections/EscrowSection.jsx';
import { FaqSection } from '../components/sections/FaqSection.jsx';
import { Features } from '../components/sections/Features.jsx';
import { GuidesPreview } from '../components/sections/GuidesPreview.jsx';
import { Hero } from '../components/sections/Hero.jsx';
import { HowItWorks } from '../components/sections/HowItWorks.jsx';
import { PaymentMethodsStrip } from '../components/sections/PaymentMethodsStrip.jsx';
import { ProblemSection } from '../components/sections/ProblemSection.jsx';
import { ProductScreens } from '../components/sections/ProductScreens.jsx';
import { ProofSection } from '../components/sections/ProofSection.jsx';
import { RoadmapSection } from '../components/sections/RoadmapSection.jsx';
import { StatsSection } from '../components/sections/StatsSection.jsx';
import { UseCases } from '../components/sections/UseCases.jsx';
import { StructuredData } from '../components/seo/StructuredData.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { organizationSchema } from '../lib/structuredData.js';

export default function HomePage() {
  useDocumentTitle();
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <Hero />
      <PaymentMethodsStrip />
      <ProblemSection />
      <HowItWorks />
      <EscrowSection />
      <ProductScreens />
      <ProofSection />
      <Features />
      <CalculatorSection />
      <UseCases />
      <StatsSection />
      <Comparison />
      <RoadmapSection />
      <GuidesPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
