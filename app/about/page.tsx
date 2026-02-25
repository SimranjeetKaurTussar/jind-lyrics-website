import Link from "next/link";

const writingStyle = [
  "Hook-first writing that prioritizes replay value and audience memory",
  "Emotionally clear Punjabi phrasing with modern commercial flow",
  "Artist-specific tone adaptation for voice, delivery, and brand fit",
  "Strong line-by-line rhythm alignment for easier recording sessions",
];

const genres = [
  "Punjabi Pop",
  "Romantic",
  "Urban / Hip-Hop",
  "Folk Fusion",
  "Dance Commercial",
  "Acoustic Storytelling",
];

const process = [
  {
    step: "1. Brief & Direction",
    detail:
      "Share your beat, mood references, and release vision so the writing starts with clear direction.",
  },
  {
    step: "2. Draft Writing",
    detail:
      "JIND creates hooks, verses, and thematic structure aligned to your melody and intended audience.",
  },
  {
    step: "3. Refinement",
    detail:
      "Revisions polish word choice, emotional impact, and performance flow until it feels stage-ready.",
  },
  {
    step: "4. Final Delivery",
    detail:
      "You receive a clean final lyric draft ready for recording, publishing, or label review.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10 pt-8">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
            About JIND
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-[var(--text)] md:text-5xl">
            Writing Lyrics that Build Artist Trust
          </h1>

          <div className="mt-6 space-y-4 text-[var(--text-soft)]">
            <p>
              JIND is a Punjabi lyricist focused on creating songs that feel both
              personal and commercially strong. Every lyric is written to match
              the artist&apos;s identity while still connecting instantly with
              listeners.
            </p>
            <p>
              From romantic singles to energetic stage tracks, the approach stays
              consistent: authentic language, clean structure, and memorable
              hooks that audiences can sing back after one listen.
            </p>
            <p>
              With a collaboration-first workflow, JIND works closely with
              singers, producers, and labels to deliver lyrics that are not just
              poetic, but practical for recording and release.
            </p>
          </div>
        </article>

        <aside className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 18%, color-mix(in srgb, var(--primary) 22%, transparent), transparent 40%), radial-gradient(circle at 86% 0, color-mix(in srgb, var(--primary-soft) 20%, transparent), transparent 34%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-[var(--text)]">JIND</h2>
            <p className="text-sm text-[var(--text-soft)]">Punjabi Lyricist</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  Experience Focus
                </p>
                <p className="mt-1 text-[var(--text)]">Commercial + emotional songwriting</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  Collaboration Style
                </p>
                <p className="mt-1 text-[var(--text)]">Fast, clear, artist-first communication</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3">
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  Delivery
                </p>
                <p className="mt-1 text-[var(--text)]">Draft-to-final workflow with revisions</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Writing Style</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--text-soft)]">
            {writingStyle.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[var(--primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Genres</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-1.5 text-sm text-[var(--text)]"
              >
                {genre}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--text)]">Process</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {process.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-5"
            >
              <h3 className="text-base font-semibold text-[var(--text)]">{item.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)] md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--text)] md:text-4xl">
          Ready to collaborate with JIND?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--text-soft)]">
          If you want lyrics that feel premium, personal, and release-ready,
          let&apos;s discuss your next song.
        </p>
        <Link
          href="/contact"
          className="cta-link mt-6 inline-flex bg-[var(--primary)] px-6 py-3 text-white hover:bg-[var(--primary-soft)]"
        >
          Go to Contact
        </Link>
      </section>
    </div>
  );
}
