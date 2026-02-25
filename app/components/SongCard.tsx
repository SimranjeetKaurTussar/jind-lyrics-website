import type { Song } from "../../lib/songs";

type SongCardProps = {
  song: Song;
};

export default function SongCard({ song }: SongCardProps) {
  return (
    <article className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--primary)_40%,var(--border))]">
      <div className="mb-4 inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-soft)]">
        {song.year}
      </div>
      <h3 className="text-xl font-semibold text-[var(--text)]">{song.title}</h3>
      <p className="mt-1 text-sm text-[var(--text-soft)]">{song.artist}</p>
      <p className="mt-4 text-sm text-[var(--text-soft)]">{song.vibe}</p>
      <p className="mt-3 text-sm font-medium text-[var(--text)]">Duration: {song.duration}</p>
      <div className="mt-5 text-sm font-semibold text-[var(--primary)] group-hover:text-[var(--primary-soft)]">
        Read lyrics preview →
      </div>
    </article>
  );
}
