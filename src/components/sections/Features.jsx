import { features } from '../../data/features.js';
import { Container } from '../ui/Container.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Nexlm"
          title="The Stellar-native way to trade XLM in Nigeria"
          description="Not another exchange where XLM is an afterthought. Nexlm is built on Stellar, for XLM, around Nigerian payments."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60} className="group rounded-3xl border border-slate-200 p-7 transition-colors hover:border-brand-200 hover:bg-brand-50/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white transition-colors group-hover:bg-brand-600">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
