import Link from "next/link";

const plans = [
  {
    name: "Hook / Chorus",
    price: "Starting at ₹4,999",
    description:
      "Memorable Punjabi hooklines built to stick in listener memory and drive replay value.",
    features: [
      "2 hook options",
      "Reference-tone matching",
      "1 revision round",
      "Delivery in 48 hours",
    ],
  },
  {
    name: "Full Song Lyrics",
    price: "Starting at ₹12,999",
    description:
      "End-to-end song writing with structured verses, hook, and emotional progression.",
    features: [
      "Full composition (hook + verses + bridge)",
      "Flow-ready line structure",
      "2 revision rounds",
      "Commercial-use ready draft",
    ],
  },
  {
    name: "Custom Project / Collab",
    price: "Custom Pricing",
    description:
      "For labels, artists, and long-term collaborations requiring strategic writing support.",
    features: [
      "Multi-track collaboration",
      "Creative direction support",
      "Priority communication",
      "Flexible timeline planning",
    ],
  },
];

const faqs = [
  {
    q: "Do you write from scratch or from references?",
    a: "Both. I can build original lyrics from a concept or tune and can also adapt tone from references while keeping lines fully original.",
  },
  {
    q: "How fast can I get first drafts?",
    a: "Most hook or short-format requests are delivered within 24–48 hours. Full songs usually take 2–4 days based on scope.",
  },
  {
    q: "Can we do revisions after delivery?",
    a: "Yes. Every package includes revision rounds so your final version fits melody, mood, and artist voice perfectly.",
  },
  {
    q: "Do you work with producers and labels?",
    a: "Absolutely. I regularly collaborate with producers, indie artists, and label teams for both singles and catalog projects.",
  },
  {
    q: "How do I start a project quickly?",
    a: "Send your beat/reference/brief on WhatsApp and I’ll reply with timelines, quote, and next steps.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-10 pt-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
          Services
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--text)] md:text-5xl">
          Premium Lyric Writing Plans
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          Choose a package that fits your release. From viral hooks to complete
          Punjabi song writing, every plan is built for quality, speed, and
          artist confidence.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--primary)_42%,var(--border))] ${
              index === 1 ? "ring-1 ring-[var(--ring)]" : ""
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
              {plan.name}
            </p>
            <p className="mt-3 text-2xl font-semibold text-[var(--text)]">{plan.price}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
              {plan.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-[var(--text)]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noreferrer"
              className="cta-link mt-6 inline-block bg-[var(--primary)] px-4 py-2.5 text-white hover:bg-[var(--primary-soft)]"
            >
              WhatsApp Now
            </a>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--text)]">FAQs</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-4"
            >
              <h3 className="text-base font-semibold text-[var(--text)]">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)] md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--text)] md:text-4xl">
          Ready to make your next hit?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--text-soft)]">
          Share your track idea and get a clear plan, timeline, and lyric
          direction within hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/911234567890"
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
