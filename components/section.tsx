'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const reduce = useReducedMotion();
  return (
    <section id={id} className={cn('py-20 md:py-28 scroll-mt-24', className)}>
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-10 md:mb-14"
        >
          {eyebrow && (
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-muted leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
