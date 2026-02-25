export default function HomePage() {
  return (
    <div className="space-y-20 pb-8 pt-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-12">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
          Punjabi Lyrics • Hooks • Storytelling
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--text)] md:text-6xl">
          Lyrics that make the beat breathe and the story linger.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-soft)] md:text-lg">
          JIND crafts premium Punjabi lyric writing for singles, EPs, and
          commercial campaigns—balancing poetic depth with mainstream appeal.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="cta-link bg-[var(--primary)] px-5 py-3 text-white hover:bg-[var(--primary-soft)]"
          >
            Explore Work
          </a>
          <a href="#contact" className="cta-link px-5 py-3">
            Start a Project
          </a>
        </div>
      </section>

      <section id="work" className="grid gap-5 md:grid-cols-3">
        {[
          "Chart-Ready Singles",
          "Film & Ad Campaign Lyrics",
          "Artist Brand Story Arcs",
        ].map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
          >
            <h2 className="text-lg font-semibold text-[var(--text)]">{item}</h2>
            <p className="mt-2 text-sm text-[var(--text-soft)]">
              Premium writing that fits melody, mood, and audience memory.
            </p>
          </article>
        ))}
      </section>

      <section id="about" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-[var(--text)]">About JIND</h2>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          From raw emotional verses to high-energy choruses, JIND combines
          authentic Punjabi expression with contemporary songcraft. The focus is
          always the same: songs people sing back.
        </p>
      </section>

      <section id="contact" className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Let&apos;s create</h2>
        <p className="mt-3 text-[var(--text-soft)]">
          Open for collaborations with artists, producers, and labels.
        </p>
        <a
          href="mailto:hello@jindlyrics.com"
          className="cta-link mt-6 inline-block bg-[var(--primary)] px-5 py-3 text-white hover:bg-[var(--primary-soft)]"
        >
          hello@jindlyrics.com
        </a>
      </section>
    </div>
  );
}
