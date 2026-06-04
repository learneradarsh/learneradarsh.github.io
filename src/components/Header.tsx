import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-3 md:justify-start md:gap-8">
          <span className="text-white font-medium">Adarsh Pandey</span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white hover:border-white/40 transition"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

          <nav className="hidden md:flex items-center gap-4 text-sm text-gray-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#workshop" className="hover:text-white transition">Workshop</a>
            <a href="#books" className="hover:text-white transition">Books</a>
            <a href="#impact" className="hover:text-white transition">Impact</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:justify-end md:gap-3">
          <div className="hidden md:flex flex-wrap items-center gap-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1TFvgNOAvS07SrYDtZ0MjaqoErtyMIpYz/view?usp=sharing"
              className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition text-white"
            >
              Resume
            </a>
            <a
              href="#books"
              className="text-sm px-4 py-2 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
            >
              See published books
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`md:hidden overflow-hidden border-t border-white/10 bg-neutral-950/95 px-6 pb-4 transition-all duration-300 ${
          menuOpen ? "max-h-80 pt-2 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-3 text-sm text-gray-300">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
            Home
          </a>
          <a href="#workshop" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
            Workshop
          </a>
          <a href="#books" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
            Books
          </a>
          <a href="#impact" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
            Impact
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
            Experience
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-white transition">
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
}
