export default function PressSection() {
  const features = [
    {
      icon: "🏢",
      title: "Enterprise Scale",
      desc: "Built systems serving 100M+ users for Fortune 500 companies"
    },
    {
      icon: "⚡",
      title: "Performance Expert",
      desc: "22MB → 5MB bundle optimization, 3.5% failure rate reduction"
    },
    {
      icon: "🧠",
      title: "AI Innovation",
      desc: "Practical AI solutions using OpenAI, LangChain, and modern frameworks"
    },
    {
      icon: "👥",
      title: "Technical Leader",
      desc: "Led teams, mentored engineers, drove architectural decisions"
    },
    {
      icon: "🎯",
      title: "Product Focus",
      desc: "Delivered MVPs, increased engagement by 26.3%, real business impact"
    },
    {
      icon: "🔒",
      title: "Security First",
      desc: "Security Champion, enforced secure coding, application security standards"
    },
  ];

  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm tracking-wide mb-3">EXPERTISE AREAS</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What Makes the Difference
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A unique blend of technical excellence, leadership, and business acumen that translates to real outcomes.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Looking for someone who can drive technical excellence AND business value?
          </p>
          <a
            href="mailto:learner.adarsh@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-emerald-500/10 border border-emerald-400/50 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
