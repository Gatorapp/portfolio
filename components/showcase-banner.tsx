'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

/**
 * Full-width visual divider showing the developer workspace graphic.
 * Sits between sections to add visual rhythm and frontend-developer feel.
 */
export function ShowcaseBanner() {
  return (
    <section aria-hidden className="relative h-72 md:h-96 overflow-hidden">
      <Image
        src={profile.backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Theme-aware overlay so the image blends in both modes */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/20 to-bg" />
      <div className="absolute inset-0 bg-bg/10 dark:bg-bg/30" />

      <div className="relative container h-full flex items-end pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-accent">
            Craft / Code / Ship
          </p>
          <h3 className="mt-2 font-display text-2xl md:text-4xl font-semibold tracking-tight text-fg">
            Pixel-perfect interfaces, built for real users.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
