import { Section } from './section';
import { profile, socials } from '@/data/profile';
import { Icon } from './icons';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 / Contact"
      title="Let's build something."
      description="Open to frontend roles, freelance projects, and collaborations. The fastest way to reach me is email."
    >
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-2xl md:text-4xl font-semibold tracking-tight hover:text-accent transition-colors break-all"
          >
            {profile.email}
          </a>
          <p className="mt-2 text-muted">{profile.location} · {profile.phone}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {socials.map((s) => {
            const Component = Icon[s.icon as keyof typeof Icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-sm text-fg hover:border-accent/60 hover:text-accent transition"
              >
                <Component size={16} /> {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
