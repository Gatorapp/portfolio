'use client';

import { motion } from 'framer-motion';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'Python',
  'Supabase',
  'Firebase',
  'Vercel',
  'Stripe',
  'OpenAI',
  'Figma',
  'Git'
];

export function TechMarquee() {
  // Duplicate the list so the loop is seamless
  const items = [...techStack, ...techStack];

  return (
    <section
      aria-label="Tech stack"
      className="relative py-10 border-y border-border bg-surface/40 overflow-hidden"
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent" />

      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 35,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        {items.map((t, i) => (
          <div
            key={`${t}-${i}`}
            className="flex items-center gap-3 font-display text-2xl md:text-3xl font-medium text-muted hover:text-fg transition-colors"
          >
            <span>{t}</span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
