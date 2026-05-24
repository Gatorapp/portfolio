import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-2 font-display text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-fg text-bg px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
