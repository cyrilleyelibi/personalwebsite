"use client";

import { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-700/50 bg-navy-950/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="text-lg font-semibold text-white transition hover:text-navy-300"
        >
          Cyrille Yelibi
        </a>
        <button
          type="button"
          className="rounded p-2 text-navy-300 sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul
          className={`absolute right-4 top-full flex flex-col gap-2 rounded-lg border border-navy-700 bg-navy-900 p-4 sm:static sm:flex-row sm:border-0 sm:bg-transparent sm:p-0 ${
            open ? "block" : "hidden"
          } sm:flex`}
        >
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block rounded px-3 py-2 text-sm text-navy-300 transition hover:bg-navy-800 hover:text-white sm:px-4"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
