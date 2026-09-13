import { describe, expect, it } from 'vitest';
import { breadcrumbSchema, faqSchema, organizationSchema } from './structuredData.js';

describe('structured data', () => {
  it('describes the organisation', () => {
    const org = organizationSchema();
    expect(org['@type']).toBe('Organization');
    expect(org.areaServed.name).toBe('Nigeria');
  });

  it('maps FAQs to schema.org questions', () => {
    const schema = faqSchema([{ question: 'Q?', answer: 'A.' }]);
    expect(schema.mainEntity[0]).toEqual({ '@type': 'Question', name: 'Q?', acceptedAnswer: { '@type': 'Answer', text: 'A.' } });
  });

  it('builds absolute breadcrumb URLs with positions', () => {
    const schema = breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]);
    expect(schema.itemListElement[1]).toMatchObject({ position: 2, item: 'https://nexlm.app/faq' });
  });
});
