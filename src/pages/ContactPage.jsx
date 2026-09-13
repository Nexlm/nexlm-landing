import { BookOpen, Github, LifeBuoy, ShieldAlert } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero.jsx';
import { Container } from '../components/ui/Container.jsx';
import { WaitlistForm } from '../components/widgets/WaitlistForm.jsx';
import { site } from '../config/site.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

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
      <PageHero eyebrow="Contact" title="Talk to the Nexlm team" description="Real people, usually within one business day." />
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {CHANNELS.map(({ icon: Icon, title, body, href, cta }) => (
              <a
                key={title}
                href={href}
                {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                className="group rounded-3xl border border-slate-200 p-7 transition-colors hover:border-brand-300"
              >
                <Icon className="h-7 w-7 text-brand-600" aria-hidden />
                <h2 className="mt-5 font-sans text-lg font-semibold text-slate-900">{title}</h2>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
                <p className="mt-4 text-sm font-semibold text-brand-700 group-hover:underline">{cta}</p>
              </a>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-ink-900 p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-white">Not trading yet?</h2>
            <p className="mt-2 text-slate-400">Join the early access list and we&apos;ll invite you as we open up.</p>
            <div className="mt-6">
              <WaitlistForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
