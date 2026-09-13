/** Normalises text for forgiving, case- and accent-insensitive matching. */
export const normalise = (text) =>
  String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

/** True when every word in the query appears somewhere in the given fields. */
export function matchesQuery(fields, query) {
  const words = normalise(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;
  const haystack = normalise(fields.join(' '));
  return words.every((word) => haystack.includes(word));
}

export const filterGlossary = (entries, query) => entries.filter((e) => matchesQuery([e.term, e.definition], query));

export const searchGuides = (guides, query) =>
  guides.filter((g) =>
    matchesQuery([g.title, g.summary, g.category, ...g.sections.flatMap((s) => [s.heading, ...(s.body ?? []), ...(s.list ?? [])])], query),
  );
