import { useEffect, useState } from 'react';

export default function PremiumCTA() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated background */}
        <div
          className="absolute inset-0 opacity-20 blur-3xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.2), transparent)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 mb-6 hover:bg-emerald-500/20 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm text-emerald-400">Open to Opportunities</span>
          </div>

          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Ready to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-pulse">
              Transform
            </span>
            <span className="text-white"> Your Team?</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            I bring full-stack expertise, proven leadership, and a passion for solving complex problems. Let's build something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:learner.adarsh@gmail.com"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>

            <a
              href="https://github.com/learneradarsh"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all font-bold flex items-center gap-2 hover:border-white/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Social proof */}
          <p className="text-gray-500 text-sm mt-12">
            Trusted by teams at Delta Airlines, Publicis Sapient, ThoughtWorks & more.
          </p>
        </div>
      </div>
    </section>
  );
}
