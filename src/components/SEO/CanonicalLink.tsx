import Link from 'next/link';

interface CanonicalLinkProps {
  href: string;
  rel?: string;
}

export function CanonicalLink({ href, rel = 'canonical' }: CanonicalLinkProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asiancoding.com';
  const fullUrl = href.startsWith('http') ? href : `${baseUrl}${href}`;

  return <link rel={rel} href={fullUrl} />;
}
