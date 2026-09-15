import { ReactNode } from 'react';

interface SchemaProps {
  schema: { [key: string]: any };
  children?: ReactNode;
}

export function Schema({ schema, children }: SchemaProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {children}
    </>
  );
}
