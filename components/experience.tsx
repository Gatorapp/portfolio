'use client';

import { motion } from 'framer-motion';
import { Section } from './section';
import { experience } from '@/data/profile';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Work history"
      description="A mix of freelance, remote roles, and mentoring — all centered on building real UIs."
    >
      <ol className="relative border-l border-border ml-2">
        {experience.map((job, i) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="ml-6 mb-10 last:mb-0"
          >
            <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-semibold">{job.company}</h3>
              <span className="text-sm text-muted">— {job.role}</span>
            </div>
            <div className="mt-1 text-xs font-mono uppercase tracking-wider text-muted">
              {job.period}
            </div>
            <p className="mt-3 text-fg/90 leading-relaxed max-w-3xl">{job.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
