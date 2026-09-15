import { seoConfig } from '@/config/seoConfig';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  httpEquiv?: string;
}

export function getCanonicalUrl(pathname: string): string {
  return `${seoConfig.baseUrl}${pathname}`;
}

export function getOgImage(imagePath?: string): string {
  if (imagePath) {
    return imagePath.startsWith('http') ? imagePath : `${seoConfig.baseUrl}${imagePath}`;
  }
  return `${seoConfig.baseUrl}${seoConfig.defaultImage}`;
}

export function getPageConfig(pageKey: keyof typeof seoConfig.pages) {
  return seoConfig.pages[pageKey];
}

export function buildMetaTags(
  title: string,
  description: string,
  robots?: string,
  additionalTags?: MetaTag[]
): MetaTag[] {
  const tags: MetaTag[] = [
    { name: 'description', content: description },
    { name: 'robots', content: robots || 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: seoConfig.siteName },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { httpEquiv: 'x-ua-compatible', content: 'IE=edge' },
  ];

  if (additionalTags) {
    tags.push(...additionalTags);
  }

  return tags;
}

export function validateMetaTags(
  title: string,
  description: string
): { valid: boolean; warnings: string[] } {
  const warnings: string[] = [];

  if (title.length < 30 || title.length > 60) {
    warnings.push(`Title length is ${title.length} chars. Recommended: 30-60.`);
  }

  if (description.length < 120 || description.length > 160) {
    warnings.push(`Description length is ${description.length} chars. Recommended: 120-160.`);
  }

  return {
    valid: warnings.length === 0,
    warnings,
  };
}
