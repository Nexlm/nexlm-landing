import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../config/site.js';
import { footerNav } from '../../data/navigation.js';
import { Container } from '../ui/Container.jsx';
import { Logo } from '../ui/Logo.jsx';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ground">
      <Container className="grid gap-12 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-soft">Peer-to-peer XLM ↔ Naira for Nigeria, with on-chain Stellar escrow on every trade.</p>
          <div className="mt-5 flex gap-5 text-sm">
            <a href={site.appUrl} className="font-semibold text-mint hover:underline">
              Open the app →
            </a>
            <a href={site.docsUrl} target="_blank" rel="noreferrer" className="text-soft hover:text-paper">
              Documentation
            </a>
          </div>
          <div className="mt-6 flex gap-2">
            <a href={site.githubUrl} target="_blank" rel="noreferrer" className="rounded border border-line p-2 text-moss hover:text-paper" aria-label="Nexlm on GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={`mailto:${site.supportEmail}`} className="rounded border border-line p-2 text-moss hover:text-paper" aria-label="Email Nexlm support">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {footerNav.map((group) => (
          <div key={group.title}>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">{group.title}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-soft hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 font-mono text-[11px] text-moss sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexlm</p>
          <p className="max-w-2xl sm:text-right">
            Crypto assets are volatile and Stellar transactions are irreversible. Nexlm is a peer-to-peer facilitator and never holds customer Naira.
          </p>
        </Container>
      </div>
    </footer>
  );
}
