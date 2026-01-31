import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  highlight: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      quote: "Adarsh led the Nx migration and Angular upgrade with exceptional execution. He transformed our codebase quality from 68% → 90% coverage while eliminating 580 lint errors.",
      author: "Engineering Manager",
      role: "Delta Airlines",
      company: "Senior Developer 2 Lead",
      highlight: "Outstanding Technical Leadership",
    },
    {
      quote: "One of the few engineers who can handle complex system design AND mentor junior developers. His architectural decisions reduced our infrastructure load by 18%.",
      author: "Tech Lead",
      role: "Publicis Sapient",
      company: "Senior Associate XT L1",
      highlight: "Full-Stack Architecture Expert",
    },
    {
      quote: "Delivered MVP from scratch ahead of schedule while maintaining security standards as Security Champion. A rare combination of technical depth and business acumen.",
      author: "Project Manager",
      role: "ThoughtWorks",
      company: "Consultant",
      highlight: "Product Delivery Excellence",
    },
    {
      quote: "Adarsh's optimization work on the inflight WiFi system showed immediate ROI. He thinks beyond code—about user experience, business metrics, and team growth.",
      author: "Senior Manager",
      role: "Delta Airlines",
      company: "Delta Sync WiFi",
      highlight: "Business Impact Focus",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm tracking-wide mb-3">RECOGNITION</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What Others Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback from managers, peers, and partners on cross-functional projects.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className="relative mb-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/[0.03] via-emerald-500/5 to-cyan-500/5 border border-white/10 transition-all duration-500 hover:border-emerald-400/30"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Quote mark */}
          <svg
            className="w-12 h-12 text-emerald-400/30 mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.75-5-7-5S0 3.75 0 5c0 1.25 0 2.5.5 4H0v5.75C0 15 0 17 3 21m19 0c3 0 7-1 7-8V5c0-1.25-4.75-5-7-5s-7 3.75-7 5c0 1.25 0 2.5.5 4H16v5.75C16 15 16 17 19 21" />
          </svg>

          {/* Testimonial Text */}
          <p className="text-white text-lg md:text-xl font-light leading-relaxed mb-8">
            "{current.quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold">
              {current.author[0]}
            </div>
            <div>
              <p className="text-white font-medium">{current.author}</p>
              <p className="text-gray-400 text-sm">{current.role}</p>
            </div>
          </div>

          {/* Highlight Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-sm font-medium">
            {current.highlight}
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-emerald-400'
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Stats from testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <p className="text-2xl font-bold text-emerald-400">90%</p>
            <p className="text-gray-400 text-sm mt-1">Code Coverage</p>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <p className="text-2xl font-bold text-cyan-400">580</p>
            <p className="text-gray-400 text-sm mt-1">Lint Errors Fixed</p>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <p className="text-2xl font-bold text-purple-400">18%</p>
            <p className="text-gray-400 text-sm mt-1">Bandwidth Reduction</p>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 text-center">
            <p className="text-2xl font-bold text-pink-400">7+</p>
            <p className="text-gray-400 text-sm mt-1">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
