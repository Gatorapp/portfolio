'use client';

import { motion } from 'framer-motion';
import { Section } from './section';
import { skills } from '@/data/profile';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 / Skills"
      title="Tools I reach for"
      description="The technologies I use most often, grouped by where they live in the stack."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, list], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {list.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-bg border border-border px-2 py-1 text-xs text-fg/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
