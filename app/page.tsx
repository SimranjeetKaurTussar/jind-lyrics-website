import Link from "next/link";
import SongCard from "./components/SongCard";
import { songs } from "../lib/songs";

const stats = [
  {
    title: "Fast Delivery",
    detail: "Draft hooks in 24–48 hrs with quick revisions.",
  },
  {
    title: "Original Lyrics",
    detail: "Fresh Punjabi writing tailored to your vibe and melody.",
  },
  {
    title: "Collab Friendly",
    detail: "Producer-first workflow, easy communication, clean handoff.",
  },
];

const testimonials = [
  {
    name: "Billa",
    role: "Independent Singer",
    quote:
      "JIND turned a rough melody into a polished track-ready lyric in one session.",
  },
  {
    name: "Harjiwan",
    role: "Music Producer",
    quote:
      "Strong hooks, clear structure, and super easy to collaborate with.",
  },
  {
    name: "Punjab Made",
    role: "Presenter",
    quote:
      "Reliable delivery and writing quality that immediately builds artist trust.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-10 pt-8">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] p-8 shadow-[var(--shadow)] md:p-14">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--primary) 22%, transparent) 0, transparent 34%), radial-gradient(circle at 82% 16%, color-mix(in srgb, var(--primary-soft) 24%, transparent) 0, transparent 34%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 92%, transparent) 0%, color-mix(in srgb, var(--bg-muted) 85%, transparent) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in srgb, var(--border) 80%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--border) 80%, transparent) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-soft)]">
            Trusted Punjabi Lyric Writing
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--text)] md:text-6xl">
            JIND — Punjabi Lyricist
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-soft)] md:text-xl">
            I write hooks, verses &amp; full Punjabi songs for singers and
            producers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/songs"
              className="cta-link bg-[var(--primary)] px-5 py-3 text-white hover:bg-[var(--primary-soft)]"
            >
              Explore Songs
            </Link>
            <a
              href="https://wa.me/918289037537"
              target="_blank"
              rel="noreferrer"
              className="cta-link px-5 py-3"
            >
              Hire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
          >
            <h2 className="text-lg font-semibold text-[var(--text)]">{stat.title}</h2>
            <p className="mt-2 text-sm text-[var(--text-soft)]">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section id="work" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-soft)]">
              Featured Songs
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">
              Lyrics built for streams and stage
            </h2>
          </div>
          <Link href="/songs" className="cta-link px-4 py-2">
            View All Songs
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {songs.slice(0, 3).map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>

      <section id="about" className="space-y-6">
        <h2 className="text-3xl font-semibold text-[var(--text)]">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)]"
            >
              <p className="text-sm leading-relaxed text-[var(--text)]">“{item.quote}”</p>
              <p className="mt-4 font-semibold text-[var(--text)]">{item.name}</p>
              <p className="text-xs text-[var(--text-soft)]">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)] md:p-12"
      >
        <h2 className="text-3xl font-semibold text-[var(--text)] md:text-4xl">
          Ready to make your next hit?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-soft)]">
          Share your reference track or concept—JIND will shape it into lyrics
          that connect instantly.
        </p>
        <a
          href="https://wa.me/918289037537"
          target="_blank"
          rel="noreferrer"
          className="cta-link mt-7 inline-block bg-[var(--primary)] px-6 py-3 text-white hover:bg-[var(--primary-soft)]"
        >
          Hire on WhatsApp
        </a>
      </section>
    </div>
  );
}
