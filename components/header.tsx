'use client';

import * as React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all',
        scrolled
          ? 'backdrop-blur-md bg-bg/70 border-b border-border'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <Logo size={26} />
          <span>Amit Patel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted hover:text-fg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={cn('block h-0.5 w-4 bg-fg transition', open && 'translate-y-1 rotate-45')} />
              <span className={cn('block h-0.5 w-4 bg-fg transition', open && '-translate-y-1 -rotate-45')} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-bg/95 backdrop-blur">
          <div className="container py-3 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base text-fg border-b border-border/60 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
