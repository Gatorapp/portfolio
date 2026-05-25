"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, socials } from "@/data/profile";
import { Icon } from "./icons";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(circle_at_30%_-10%,hsl(var(--accent)/0.25),transparent_55%),radial-gradient(circle_at_85%_15%,hsl(var(--accent)/0.18),transparent_60%)]"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.08] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-12 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.available
                ? "Available for new opportunities"
                : "Currently working on projects"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              {profile.name}.{" "}
              <span className="text-muted">{profile.role.toLowerCase()}</span>
              <br />
              building thoughtful web experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-xl text-lg text-muted leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
              >
                View projects <Icon.arrow size={16} />
              </a>
              <a
                href="/resume.pdf"
                download="Amit-Patel-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Download Resume
              </a>

              <div className="ml-1 flex items-center gap-1">
                {socials.map((s) => {
                  const Component = Icon[s.icon as keyof typeof Icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-fg hover:border-accent/60 transition"
                    >
                      <Component size={16} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex items-center gap-2 text-xs text-muted"
            >
              <Icon.pin size={14} /> {profile.location}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-sm md:max-w-md"
          >
            {/* Soft halo */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-3xl opacity-60 [background-image:radial-gradient(circle_at_center,hsl(var(--accent)/0.45),transparent_70%)]"
            />
            {/* Floating frame */}
            <div className="relative rounded-3xl overflow-hidden border border-border bg-surface shadow-2xl">
              <Image
                src={profile.heroImage}
                alt={`${profile.name} — ${profile.role}`}
                width={800}
                height={800}
                priority
                className="w-full h-auto"
              />
              {/* Corner accent badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-bg/85 backdrop-blur border border-border px-3 py-2 text-xs">
                <span className="font-mono uppercase tracking-wider text-accent">
                  React · Next.js
                </span>
                <span className="text-muted">v14</span>
              </div>
            </div>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-3 -left-3 rounded-full bg-bg border border-border px-3 py-1.5 text-xs font-medium shadow-lg"
            >
              ⚡ TypeScript
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="absolute -bottom-3 -right-3 rounded-full bg-bg border border-border px-3 py-1.5 text-xs font-medium shadow-lg"
            >
              🎨 Tailwind
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
