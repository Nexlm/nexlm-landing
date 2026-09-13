import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../config/site.js';

function setMeta(selector, attribute, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attribute, value);
}

/** Sets the page title, description, canonical URL and Open Graph tags for the current route. */
export function useDocumentTitle(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${site.tagline}`;
    const desc = description ?? site.description;
    const url = new URL(pathname, site.url).toString();

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', desc);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', desc);
  }, [title, description, pathname]);
}
