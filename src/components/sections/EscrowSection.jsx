import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { EscrowDiagram } from '../widgets/EscrowDiagram.jsx';

export function EscrowSection() {
  return (
    <section id="escrow" className="bg-ink-950 py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            align="left"
            dark
            eyebrow="On-chain escrow"
            title="Your counterparty can't run off with the XLM"
            description="Every trade creates a brand-new Stellar account that holds the seller's XLM. Its own key is switched off the moment it's funded, so the coins can only go to the buyer or back to the seller."
          />
          <Button to="/security" variant="outline" className="mt-8">
            How escrow keeps you safe <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="lg:col-span-3">
          <EscrowDiagram />
        </div>
      </Container>
    </section>
  );
}
