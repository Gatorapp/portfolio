'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      aria-label="Toggle color theme"
      onClick={toggle}
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg overflow-hidden transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40',
        className
      )}
    >
      {/* Animated radial wash that sweeps across when switching */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ y: -16, opacity: 0, rotate: -45, scale: 0.7 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: 16, opacity: 0, rotate: 45, scale: 0.7 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
