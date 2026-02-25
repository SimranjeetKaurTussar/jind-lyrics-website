"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/songs", label: "Songs" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const linkClasses = (href: string) => {
    const isHashLink = href.includes("#");
    const hash = isHashLink ? href.slice(href.indexOf("#")) : "";
    const isActive = isHashLink
      ? pathname === "/" && activeHash === hash
      : pathname === href;

    return [
      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "bg-[color-mix(in_srgb,var(--primary)_20%,transparent)] text-[var(--text)]"
        : "text-[var(--text-soft)] hover:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] hover:text-[var(--text)]",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
    ].join(" ");
  };

  return (
    <header className="nav-shell">
      <nav className="container py-3" aria-label="Primary">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
            aria-label="JIND home"
          >
            <span className="leading-tight">
              <strong className="block text-sm tracking-[0.2em]">JIND</strong>
              <small className="text-xs text-[var(--text-soft)] whitespace-nowrap">
                Punjabi Lyricist
              </small>
            </span>
          </Link>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] text-[var(--text)] transition hover:bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] sm:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="relative block h-4 w-5">
              {/* top line */}
              <span
                className={[
                  "absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-current transition duration-200",
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "",
                ].join(" ")}
              />
              {/* middle line */}
              <span
                className={[
                  "absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition duration-200",
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
                ].join(" ")}
              />
              {/* bottom line */}
              <span
                className={[
                  "absolute left-0 bottom-0 block h-[2px] w-5 rounded-full bg-current transition duration-200",
                  isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="cta-link ml-1 bg-[var(--primary)] text-white hover:bg-[var(--primary-soft)] text-sm whitespace-nowrap"
            >
              Hire Me
            </Link>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            isOpen ? "max-h-96 pt-3" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses(link.href)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="cta-link bg-[var(--primary)] text-white hover:bg-[var(--primary-soft)]"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
