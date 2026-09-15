'use client';

import { ReactNode } from 'react';

export const metadata = {
  robots: 'noindex, nofollow',
};

export default function InternalLayout({ children }: { children: ReactNode }) {
  return (
    <>{children}</>
  );
}
