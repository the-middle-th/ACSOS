interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export function createLocalBusinessSchema(
  name: string,
  description: string,
  image: string,
  url: string,
  telephone?: string,
  areaServed: string = 'TH'
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    image,
    url,
    ...(telephone && { telephone }),
    areaServed,
    priceRange: '$$',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales Support',
      telephone,
      availableLanguage: ['en', 'th'],
    },
  };
}

export function createContactPointSchema(
  contactType: string,
  telephone?: string,
  email?: string,
  areaServed: string = 'TH'
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType,
    ...(telephone && { telephone }),
    ...(email && { email }),
    areaServed,
    availableLanguage: ['en', 'th'],
  };
}

export function createOrganizationSchema(
  name: string,
  url: string,
  logo: string,
  description: string
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    sameAs: [
      'https://www.facebook.com/asiancoding',
      'https://www.linkedin.com/company/asiancoding',
    ],
  };
}

export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
