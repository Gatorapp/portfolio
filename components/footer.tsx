import { Logo } from './logo';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted text-sm">
          <Logo size={20} />
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        </div>
        <div className="text-xs text-muted font-mono">
          Built with Next.js 14, Tailwind & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
