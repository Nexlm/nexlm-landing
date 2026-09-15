import { Container } from '../ui/Container.jsx';

/** Header band used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="glow-leaf border-b border-line pb-16 pt-20 sm:pb-20 sm:pt-28">
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-paper sm:text-7xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">{description}</p>}
        {children}
      </Container>
    </section>
  );
}
