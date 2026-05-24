'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * A full-screen, low-opacity wash that sweeps across the page when the
 * theme changes. Provides a perceptible cross-fade transition without
 * blocking interaction.
 */
export function ThemeTransition() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resolvedTheme}
        initial={{ opacity: 0.65, scale: 1.04 }}
        animate={{ opacity: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[60] bg-bg"
      />
    </AnimatePresence>
  );
}
