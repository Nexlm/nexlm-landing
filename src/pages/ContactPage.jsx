import { BookOpen, Github, LifeBuoy, ShieldAlert } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { WaitlistForm } from '../components/widgets/WaitlistForm.jsx';
import { site } from '../config/site.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { cn } from '../lib/cn.js';

const CHANNELS = [
  { icon: LifeBuoy, title: 'Trade support', body: 'Problems with a trade, deposit or withdrawal. Include your trade ID.', href: `mailto:${site.supportEmail}`, cta: site.supportEmail },
  { icon: ShieldAlert, title: 'Security reports', body: 'Report vulnerabilities privately. Please do not open public issues.', href: 'mailto:security@nexlm.app', cta: 'security@nexlm.app' },
  { icon: BookOpen, title: 'Documentation', body: 'Guides for traders and technical docs for developers.', href: site.docsUrl, cta: 'Read the docs' },
  { icon: Github, title: 'Open source', body: 'Follow development and read the code on GitHub.', href: site.githubUrl, cta: 'github.com/Nexlm' },
];

export default function ContactPage() {
  useDocumentTitle('Contact', 'Get in touch with the Nexlm team for trade support, security reports and partnerships.');

  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to the Nexlm team." description="Real people, usually within one business day." />
      <section className="border-b border-line py-20">
        <Container>
          <div className="grid border-t border-line sm:grid-cols-2">
            {CHANNELS.map(({ icon: Icon, title, body, href, cta }, i) => (
              <a
                key={title}
                href={href}
                {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                className={cn('group border-b border-line py-9 pr-6 transition-colors hover:bg-panel/40', i % 2 === 1 && 'sm:border-l sm:border-line sm:pl-8')}
              >
                <Icon className="h-6 w-6 text-mint" aria-hidden />
                <h2 className="mt-5 text-2xl font-bold">{title}</h2>
                <p className="mt-2 text-soft">{body}</p>
                <p className="num mt-5 text-sm text-gold group-hover:underline">{cta}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
      <section className="glow-leaf py-20">
        <Container>
          <p className="eyebrow">Not trading yet?</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Join early access.</h2>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </Container>
      </section>
    </>
  );
}
