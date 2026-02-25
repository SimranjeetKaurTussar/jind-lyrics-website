export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-muted)_80%,transparent)]">
      <div className="container flex flex-col gap-4 py-8 text-sm text-[var(--text-soft)] md:flex-row md:items-center md:justify-between">
        <div>
          © {year} JIND. All rights reserved.
          <p className="mt-1 text-xs">Built with ACD</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="cta-link px-4 py-2 text-xs">
            Instagram
          </a>
          <a href="#" className="cta-link px-4 py-2 text-xs">
            YouTube
          </a>
          <a href="#" className="cta-link px-4 py-2 text-xs">
            Spotify
          </a>
        </div>
      </div>
    </footer>
  );
}
