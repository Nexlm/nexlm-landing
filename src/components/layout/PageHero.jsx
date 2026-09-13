import { Container } from '../ui/Container.jsx';

/** Dark header band used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden />
      <Container className="relative">
        {eyebrow && <p className="eyebrow text-brand-300">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{description}</p>}
        {children}
      </Container>
    </section>
  );
}
