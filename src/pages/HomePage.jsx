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
import { RoadmapSection } from '../components/sections/RoadmapSection.jsx';
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
      <HowItWorks />
      <EscrowSection />
      <Features />
      <CalculatorSection />
      <UseCases />
      <Comparison />
      <RoadmapSection />
      <GuidesPreview />
      <FaqSection />
      <CtaSection />
    </>
  );
}
