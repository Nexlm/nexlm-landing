import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { Container } from '../ui/Container.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { EscrowDiagram } from '../widgets/EscrowDiagram.jsx';

export function EscrowSection() {
  return (
    <section id="escrow" className="glow-gold border-b border-line bg-ground py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="On-chain escrow"
            title={
              <>
                One Stellar account <span className="text-gold">per trade</span>.
              </>
            }
            description="The escrow account is created and locked in a single atomic transaction. Its own key is switched off, so the XLM can only go to the buyer or back to the seller."
          />
          <Button to="/security" variant="outline" className="shrink-0">
            Security details <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-14">
          <EscrowDiagram />
        </div>
      </Container>
    </section>
  );
}
