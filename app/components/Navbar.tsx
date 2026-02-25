import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="container nav-content" aria-label="Primary">
        <Link href="/" className="brand" aria-label="JIND home">
          <span className="brand-mark" aria-hidden>
            J
          </span>
          <span>
            JIND <em>Lyrics</em>
          </span>
        </Link>

        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" className="cta-link">
            Book Collaboration
          </a>
        </div>
      </nav>
    </header>
  );
}
