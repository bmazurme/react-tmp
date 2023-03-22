import React from 'react';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ heading?: string; }>;

export default function Content({ children, heading }: Props) {
  return (
    <main className="content">
      <h2>{heading}</h2>
      {children}
    </main>
  );
}
