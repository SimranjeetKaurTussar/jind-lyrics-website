"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { songs } from "../../lib/songs";

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export default function SongsPage() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [mood, setMood] = useState("all");

  const genres = useMemo(
    () => Array.from(new Set(songs.map((song) => song.genre))).sort(),
    []
  );

  const moods = useMemo(
    () => Array.from(new Set(songs.map((song) => song.mood))).sort(),
    []
  );

  const filteredSongs = useMemo(() => {
    const q = normalize(query);

    return songs.filter((song) => {
      const searchableText = [song.title, ...(song.lyricsSample ?? [])]
        .join(" ")
        .toLowerCase();

      const matchesQuery = q.length === 0 || searchableText.includes(q);
      const matchesGenre = genre === "all" || song.genre === genre;
      const matchesMood = mood === "all" || song.mood === mood;

      return matchesQuery && matchesGenre && matchesMood;
    });
  }, [query, genre, mood]);

  const handleReset = () => {
    setQuery("");
    setGenre("all");
    setMood("all");
  };

  return (
    <div className="space-y-10 pb-10 pt-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
          Song Library
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--text)] md:text-5xl">
          Punjabi Songs by JIND
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          Explore ready-to-record hooks, verses, and full song concepts crafted
          for singers, producers, and labels.
        </p>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] md:p-5">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="md:col-span-2">
            <span className="mb-1 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
              Search title or lyrics
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type keywords..."
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
            />
          </label>

          <label>
            <span className="mb-1 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
              Genre
            </span>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
            >
              <option value="all">All Genres</option>
              {genres.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
              Mood
            </span>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
            >
              <option value="all">All Moods</option>
              {moods.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-wrap items-center gap-2 md:col-span-4">
            <button
              type="button"
              onClick={handleReset}
              className="cta-link px-5 py-2.5"
            >
              Reset
            </button>

            <p className="text-sm text-[var(--text-soft)]">
              {filteredSongs.length} result{filteredSongs.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Songs</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredSongs.map((song) => (
            <article
              key={song.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--primary)_40%,var(--border))]"
            >
              <h3 className="text-xl font-semibold text-[var(--text)]">
                {song.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-soft)]">{song.artist}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text)]">
                  {song.genre}
                </span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text)]">
                  {song.mood}
                </span>
              </div>

              <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3 text-sm leading-relaxed text-[var(--text-soft)]">
                {(song.lyricsSample ?? []).slice(0, 4).map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {(song.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] px-2.5 py-1 text-xs font-medium text-[var(--text)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {song.youtubeUrl ? (
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-link bg-[var(--primary)] px-4 py-2 text-white hover:bg-[var(--primary-soft)]"
                  >
                    Listen
                  </a>
                ) : null}
                <Link href={`/contact?song=${song.id}`} className="cta-link px-4 py-2">
                  Request Similar
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredSongs.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--text-soft)]">
            No songs matched your filters. Try adjusting search, genre, or mood.
          </div>
        ) : null}
      </section>
    </div>
  );
}