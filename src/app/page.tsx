import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8 py-8 sm:py-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">JIND — Punjabi Lyricist</h1>
        <p className="max-w-2xl text-base text-zinc-600 sm:text-lg">
          Hooks, verses &amp; full songs for singers and producers.
        </p>
      </header>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/songs"
          className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          View Songs
        </Link>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Hire on WhatsApp
        </a>
      </div>
    </section>
  );
}
