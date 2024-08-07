'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionProps = {
  heading: string;
  headingAlignment?: 'right' | 'left';
  children: ReactNode;
  invert?: boolean;
};

export default function Section({
  heading,
  headingAlignment,
  children,
  invert = false,
}: SectionProps) {
  return (
    <section className='col-reverse flex flex-col gap-5 md:flex-row md:gap-9'>
      <h1
        className={cn(
          'shrink-0 md:w-32',
          headingAlignment === 'right' && 'md:text-right',
          invert
            ? 'text-primary font-medium'
            : 'text-[#656565] dark:text-neutral-300'
        )}
      >
        {heading}
      </h1>
      {children}
    </section>
  );
}
