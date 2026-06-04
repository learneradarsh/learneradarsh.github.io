export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <span className="text-white font-medium">Adarsh Pandey</span>
          <nav className="hidden md:flex items-center gap-4 text-sm text-gray-300">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#workshop" className="hover:text-white transition">Workshop</a>
            <a href="#books" className="hover:text-white transition">Books</a>
            <a href="#impact" className="hover:text-white transition">Impact</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            target="_blank"
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
    </header>
  );
}
