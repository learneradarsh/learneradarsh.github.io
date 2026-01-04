export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-medium">Adarsh Pandey</span>

        <a
          target="_blank"
          href="https://drive.google.com/file/d/1YYKPxAXHBIP_GBwjLSXs098mdNsa4cFS/view?usp=sharing"
          className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition text-white"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
