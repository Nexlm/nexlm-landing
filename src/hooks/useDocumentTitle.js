import { useEffect } from 'react';
import { site } from '../config/site.js';

/** Sets the page title and meta description for the current route. */
export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} — ${site.tagline}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description ?? site.description);
  }, [title, description]);
}
