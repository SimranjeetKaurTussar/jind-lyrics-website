import Link from "next/link";

const plans = [
  {
    name: "Hook / Chorus",
    badge: "Starter",
    price: "Starting at ₹40,000",
    description:
      "High-retention Punjabi hooks engineered for short-form virality and instant recall.",
    features: [
      "2 unique hook options",
      "Vocal meter + melody-fit phrasing",
      "1 revision round included",
      "48-hour delivery window",
    ],
  },
  {
    name: "Full Song Lyrics",
    badge: "Most Popular",
    price: "Starting at ₹50,000",
    description:
      "Complete lyrical architecture from opening line to closing impact, optimized for release.",
    features: [
      "Full song (hook + verses + bridge)",
      "Narrative progression + emotional arc",
      "2 revision rounds included",
      "Commercial-ready polish pass",
    ],
  },
  {
    name: "Custom Project / Collab",
    badge: "Advanced",
    price: "Custom Pricing",
    description:
      "Strategic songwriting support for artists, labels, campaigns, and multi-track rollouts.",
    features: [
      "Album / EP collaboration support",
      "Creative direction alignment",
      "Priority communication channel",
      "Flexible milestone planning",
    ],
  },
] as const;

const faqs = [
  {
    q: "Do you write completely original lyrics?",
    a: "Yes. Every line is written from scratch for your project while matching your intended tone, audience, and production style.",
  },
  {
    q: "How quickly can I receive the first version?",
    a: "Hooks are usually delivered in 24–48 hours. Full songs typically take 2–4 days depending on complexity and references.",
  },
  {
    q: "Can I request revisions?",
    a: "Absolutely. Each package includes revision rounds so the final draft locks perfectly with melody, performance, and emotion.",
  },
  {
    q: "Do you collaborate with producers and labels?",
    a: "Yes. I regularly work with producers, independent artists, and label teams for both one-off tracks and longer projects.",
  },
  {
    q: "What is the quickest way to start?",
    a: "Send your beat, reference track, and concept on WhatsApp. You’ll receive scope, timeline, and pricing guidance quickly.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-10 pt-8">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-12">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 22%, color-mix(in srgb, var(--primary) 28%, transparent), transparent 42%), radial-gradient(circle at 80% 2%, color-mix(in srgb, var(--primary-soft) 20%, transparent), transparent 36%)",
          }}
        />
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] md:text-5xl">
            Pricing Designed for Real Music Releases
          </h1>
          <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
            Choose a writing plan that matches your release cycle. Every package
            is built for speed, originality, and artist-first collaboration.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_42%,var(--border))] hover:shadow-[0_20px_40px_-28px_color-mix(in_srgb,var(--primary)_45%,transparent)] hover:ring-1 ring-[var(--ring)]`}
          >
            <p className="inline-flex rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-soft)]">
              {plan.badge}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-[var(--text)]">{plan.name}</h2>
            <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{plan.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
              {plan.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-[var(--text)]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[var(--primary)] transition group-hover:scale-110" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/918289037537"
              target="_blank"
              rel="noreferrer"
              className="cta-link mt-6 inline-flex items-center bg-[var(--primary)] px-4 py-2.5 text-white hover:bg-[var(--primary-soft)]"
            >
              WhatsApp Now
            </a>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--text)]">FAQs</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-5 transition hover:border-[color-mix(in_srgb,var(--primary)_35%,var(--border))]"
            >
              <h3 className="text-base font-semibold text-[var(--text)]">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)] md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
          Final Call
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] md:text-4xl">
          Let&apos;s Build Your Next Hit Record
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--text-soft)]">
          Send your concept, reference, or beat and get a clear execution plan
          with timelines and deliverables.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/918289037537"
            target="_blank"
            rel="noreferrer"
            className="cta-link bg-[var(--primary)] px-6 py-3 text-white hover:bg-[var(--primary-soft)]"
          >
            WhatsApp Now
          </a>
          <Link href="/songs" className="cta-link px-6 py-3">
            Explore Songs
          </Link>
        </div>
      </section>
    </div>
  );
}
