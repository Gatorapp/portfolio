'use client';

import * as React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from './section';
import { projects } from '@/data/profile';
import { Icon } from './icons';
import { cn } from '@/lib/utils';

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

export function ProjectGallery() {
  const [filter, setFilter] = React.useState<string>('All');

  const visible = React.useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <Section
      id="projects"
      eyebrow="03 / Selected work"
      title="Project gallery"
      description="A selection of recent builds — filter by stack to narrow the view."
    >
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {['All', ...allTags].map((tag) => {
          const active = filter === tag;
          return (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs transition-colors',
                active
                  ? 'border-accent bg-accent text-accent-fg'
                  : 'border-border bg-surface text-muted hover:text-fg hover:border-fg/40'
              )}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-surface overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/15 via-transparent to-fg/5">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {p.featured && (
                  <div className="absolute top-3 left-3 rounded-full bg-bg/90 backdrop-blur border border-border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent z-10">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted line-clamp-2">{p.blurb}</p>
                <p className="mt-3 text-sm text-fg/80 leading-relaxed flex-1">{p.description}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-bg border border-border px-2 py-0.5 text-[11px] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg transition"
                  >
                    <Icon.github size={14} /> Code
                  </a>
                  {p.demo && p.demo !== '#' && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg transition"
                    >
                      <Icon.external size={14} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted">
          No projects match this filter.
        </div>
      )}
    </Section>
  );
}
