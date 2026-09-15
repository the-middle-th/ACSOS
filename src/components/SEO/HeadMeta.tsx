'use client';

import Head from 'next/head';
import { ReactNode } from 'react';

interface HeadMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
  langAlternates?: { lang: string; url: string }[];
  children?: ReactNode;
}

export function HeadMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  robots = 'index, follow',
  langAlternates,
  children,
}: HeadMetaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asiancoding.com';
  const fullCanonicalUrl = canonical ? `${baseUrl}${canonical}` : '';
  const fullOgImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${baseUrl}${ogImage}`
    : `${baseUrl}/og-image.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <meta name="language" content="English" />
      <meta name="author" content="AsianCoding" />

      {/* Canonical */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl || `${baseUrl}/`} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="AsianCoding" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Alternate Languages */}
      {langAlternates &&
        langAlternates.map((alt) => (
          <link
            key={alt.lang}
            rel="alternate"
            hrefLang={alt.lang}
            href={`${baseUrl}${alt.url}`}
          />
        ))}

      {/* Additional */}
      {children}
    </Head>
  );
}
