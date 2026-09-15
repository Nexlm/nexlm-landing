import { features } from '../../data/features.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { NetworkPulse } from '../widgets/NetworkPulse.jsx';

export function Features() {
  return (
    <section id="features" className="border-b border-line bg-ground py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Nexlm"
          title="The Stellar-native way to trade XLM in Nigeria."
          description="Not another exchange where XLM is an afterthought — built on Stellar, for XLM, around Nigerian payments."
        />
        <NetworkPulse className="mt-12" />
        <div className="hairline-3 mt-2 border-t-0">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <Icon className="h-6 w-6 text-mint" aria-hidden />
              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-paper">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-soft">{body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
