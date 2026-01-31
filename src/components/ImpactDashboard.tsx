import { useEffect, useState } from 'react';

interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export default function ImpactDashboard() {
  const [counters, setCounters] = useState({
    users: 0,
    years: 0,
    scale: 0,
    projects: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const stats: StatItem[] = [
    {
      label: 'Users Impacted',
      value: '100',
      suffix: 'M+',
      description: 'Serving millions of users globally with high-performance systems',
    },
    {
      label: 'Years Experience',
      value: '7',
      suffix: '+',
      description: 'Building scalable systems across frontend, backend, cloud & AI',
    },
    {
      label: 'Bundle Size Reduction',
      value: '77',
      suffix: '%',
      description: 'Optimized from 22MB → 5MB using content-split strategy',
    },
    {
      label: 'Coverage Improvement',
      value: '22',
      suffix: '%',
      description: 'Increased code coverage from 68% → 90% through Nx migration',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animationDuration = 2000;
    const startTime = Date.now();
    const targets = [100, 7, 77, 22];

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / animationDuration, 1);

      setCounters({
        users: Math.floor(targets[0] * progress),
        years: Math.floor(targets[1] * progress),
        scale: Math.floor(targets[2] * progress),
        projects: Math.floor(targets[3] * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const displayCounters = [
    { value: counters.users, suffix: 'M+', label: 'Users Impacted' },
    { value: counters.years, suffix: '+', label: 'Years Experience' },
    { value: counters.scale, suffix: '%', label: 'Bundle Optimization' },
    { value: counters.projects, suffix: '%', label: 'Coverage Improvement' },
  ];

  return (
    <div className="w-full">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {displayCounters.map((stat, idx) => (
          <div
            key={idx}
            className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                {stat.value}
                <span className="text-lg">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Rotating Highlights */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 overflow-hidden">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <span className="text-xl">⚡</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[100px] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {stats[activeIndex].label}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {stats[activeIndex].description}
              </p>
            </div>

            {/* Dots navigation */}
            <div className="flex gap-2 mt-4">
              {stats.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-8 bg-emerald-400'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`View stat ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Achievements Carousel */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-400/30 transition-colors">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-2xl">🚀</span>
            <div>
              <h4 className="font-semibold text-white">Performance at Scale</h4>
              <p className="text-gray-400 text-sm mt-1">
                Reduced regression issues by 38% and WiFi failures by 3.5% for 100M+ users
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/30 transition-colors">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-2xl">🏗️</span>
            <div>
              <h4 className="font-semibold text-white">Architecture & Leadership</h4>
              <p className="text-gray-400 text-sm mt-1">
                Led Nx migration, eliminated 580 lint errors, reduced cyclomatic complexity 12→4
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-400/30 transition-colors">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-2xl">🎯</span>
            <div>
              <h4 className="font-semibold text-white">Product Impact</h4>
              <p className="text-gray-400 text-sm mt-1">
                Delivered MVP in 2.5 months, increased user engagement by 26.3% MoM
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-pink-400/30 transition-colors">
          <div className="flex items-start gap-3 mb-2">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-semibold text-white">Innovation & AI</h4>
              <p className="text-gray-400 text-sm mt-1">
                Building practical AI solutions using OpenAI & LangChain for real business value
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
