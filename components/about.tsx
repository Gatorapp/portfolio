import { Section } from './section';
import { profile, education } from '@/data/profile';

const highlights = [
  { value: '20+', label: 'Students mentored' },
  { value: '3+', label: 'Years building React UIs' },
  { value: '10+', label: 'Shipped projects' },
  { value: '∞', label: 'Cups of chai' }
];

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="A frontend dev who loves to code.">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-fg/90 leading-relaxed">
          <p>{profile.summary}</p>

          <p className="text-muted">
            Outside of building UIs, I mentor 20+ students through Frontend Simplified — running
            weekly pair-programming sessions on accessibility, SEO, and performance, reviewing
            pull requests line-by-line, and helping people land their first frontend role. A few
            of my mentees have already shipped production apps and earned offers, which is honestly
            more rewarding than any feature I&apos;ve written for myself.
          </p>

          <p className="text-muted">
            I also write practical guides on React component architecture, TypeScript patterns
            (discriminated unions, generic hooks, branded types), and how to design APIs that
            don&apos;t embarrass you six months later. When I&apos;m stuck I lean on the tools
            you&apos;d expect — DevTools profiling, React Query devtools, Lighthouse — and the ones
            you might not, like sketching component state machines on paper before writing a single line.
          </p>

          <p className="text-muted">
            On the side I&apos;m exploring how AI fits into product UX (image analysis, real-time
            assistants, structured outputs) and building small data tools around real-estate
            investment — scraping listings, normalizing comps, and turning spreadsheets into
            something you&apos;d actually want to look at. I&apos;m most energized when a hard
            problem ends with a calm, obvious-looking interface.
          </p>

          <p className="text-muted">
            Currently sharpening full-stack and cloud skills (Node, serverless, Supabase, basic
            cyber-security hygiene) so I can own features end-to-end. Always happy to nerd out about
            design systems, scientific calculators, budgeting apps, or the right easing curve for a
            page transition.
          </p>

          {/* Highlights strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-border bg-surface px-4 py-3"
              >
                <div className="font-display text-2xl font-semibold text-fg">{h.value}</div>
                <div className="text-xs text-muted mt-0.5">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Education</h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.title} className="border-l-2 border-border pl-4">
                <div className="text-sm font-medium text-fg">{e.title}</div>
                <div className="text-xs text-muted mt-0.5">{e.period}</div>
                <p className="text-sm text-muted mt-1.5">{e.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-lg font-semibold mt-8 mb-4">Currently learning</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span>Server actions, edge runtimes, and React 19 features</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span>Cloud fundamentals (AWS Amplify, Vercel KV, serverless DBs)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span>Practical AI integrations — OpenAI tool use, structured outputs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              <span>Web security basics: OWASP top 10, CSP, auth flows</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
