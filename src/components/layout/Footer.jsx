import { Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../config/site.js';
import { footerNav } from '../../data/navigation.js';
import { Container } from '../ui/Container.jsx';
import { Logo } from '../ui/Logo.jsx';

export function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-400">
      <Container className="grid gap-12 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Peer-to-peer XLM ↔ Naira trading for Nigeria, secured by on-chain Stellar escrow.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:text-white" aria-label="Nexlm on GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={`mailto:${site.supportEmail}`} className="rounded-full border border-white/10 p-2 hover:text-white" aria-label="Email Nexlm support">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {footerNav.map((group) => (
          <div key={group.title}>
            <h2 className="font-sans text-sm font-semibold text-white">{group.title}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nexlm. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Crypto assets are volatile and trades are irreversible. Nexlm is a peer-to-peer facilitator and does not hold customer Naira.
          </p>
        </Container>
      </div>
    </footer>
  );
}
