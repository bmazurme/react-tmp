import React from 'react';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ heading?: string; }>;

export default function Content({
  heading,
  children,
}: Props) {
  return (
    <main className="content">
      {children}
    </main>
  );
}
