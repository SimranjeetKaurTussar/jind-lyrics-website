"use client";

import Link from "next/link";
import { FormEvent, Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { findSongById } from "../../lib/songs";

type FormState = {
  name: string;
  role: string;
  email: string;
  message: string;
};

function ContactContent() {
  const searchParams = useSearchParams();
  const songId = searchParams.get("song") ?? "";

  const song = useMemo(() => findSongById(songId), [songId]);
  const songPrefill = song ? `I want a song similar to ${song.title}.` : "";

  const [form, setForm] = useState<FormState>({
    name: "",
    role: "",
    email: "",
    message: songPrefill,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const setField = (field: keyof FormState, value: string) => {
    setSubmitted(false);
    setError("");
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasRequired =
      form.name.trim() &&
      form.role.trim() &&
      form.email.trim() &&
      form.message.trim();

    if (!hasRequired) {
      setSubmitted(false);
      setError("Please fill in all required fields before submitting.");
      return;
    }

    setError("");
    setSubmitted(true);
    setForm((current) => ({ ...current, message: current.message.trim() }));
  };

  return (
    <div className="space-y-10 pb-10 pt-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow)] md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-soft)]">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[var(--text)] md:text-5xl">
          Let&apos;s Build Your Next Punjabi Hit
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--text-soft)]">
          Send your brief and get a fast response on concept, timeline, and how
          JIND can shape the lyrics for your release.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Project Brief Form</h2>
          <p className="mt-2 text-sm text-[var(--text-soft)]">
            All fields are required. We&apos;ll use this to understand your music
            direction and reply quickly.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-[var(--text)]">Name</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={(event) => setField("name", event.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-[var(--text)]">Role</span>
              <input
                required
                type="text"
                name="role"
                value={form.role}
                onChange={(event) => setField("role", event.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Singer / Producer / Label"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-[var(--text)]">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setField("email", event.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-[var(--text)]">Message</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={(event) => setField("message", event.target.value)}
                className="min-h-32 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-2 text-sm text-[var(--text)] outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
                placeholder="Tell us your project idea, mood, and timeline."
              />
            </label>

            {error ? (
              <p
                role="alert"
                className="rounded-xl border border-red-400/60 bg-red-400/10 px-3 py-2 text-sm text-red-500"
              >
                {error}
              </p>
            ) : null}

            {submitted ? (
              <p
                role="status"
                className="rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-500"
              >
                Thanks! Your brief is saved locally and looks good. We&apos;ll connect
                with you soon.
              </p>
            ) : null}

            <button
              type="submit"
              className="cta-link inline-flex bg-[var(--primary)] px-6 py-3 text-white hover:bg-[var(--primary-soft)]"
            >
              Send Brief
            </button>
          </form>
        </article>

        <aside className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-8">
          <h2 className="text-xl font-semibold text-[var(--text)]">Quick Contact</h2>
          <p className="text-sm text-[var(--text-soft)]">
            Prefer direct communication? Reach out instantly.
          </p>

          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noreferrer"
            className="cta-link inline-flex w-full justify-center bg-[var(--primary)] px-4 py-2.5 text-white hover:bg-[var(--primary-soft)]"
          >
            WhatsApp Now
          </a>

          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-soft)]">
                Instagram
              </p>
              <a
                href="#"
                className="mt-1 inline-block text-[var(--text)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
              >
                @jindlyrics (placeholder)
              </a>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-soft)]">
                Email
              </p>
              <a
                href="mailto:hello@jindlyrics.com"
                className="mt-1 inline-block text-[var(--text)] underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
              >
                hello@jindlyrics.com
              </a>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-soft)]">
                Location
              </p>
              <p className="mt-1 text-[var(--text)]">Punjab, India</p>
            </div>
          </div>

          {song ? (
            <div className="rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] p-3 text-sm text-[var(--text)]">
              Prefilled from song request: <strong>{song.title}</strong>
              <div className="mt-1">
                <Link
                  href="/songs"
                  className="underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
                >
                  Browse all songs
                </Link>
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-8 text-sm text-[var(--text-soft)]">Loading contact form...</div>}>
      <ContactContent />
    </Suspense>
  );
}
