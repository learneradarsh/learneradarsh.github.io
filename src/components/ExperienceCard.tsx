type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-[-9px] top-0 bottom-0 w-[2px] bg-white/10"></div>
      
      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:block absolute left-[-14px] top-8 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

      <div className="mb-14 border border-white/10 rounded-xl p-8 bg-white/5 hover:bg-white/10 transition group">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition">{company}</h3>
                <p className="text-lg text-emerald-100 font-medium mt-1">{role}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-400 text-sm font-mono">{period}</p>
                <p className="text-gray-500 text-xs">{location}</p>
            </div>
        </div>

        <ul className="space-y-3 text-gray-300 text-sm leading-relaxed list-none">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-start">
                <span className="mr-3 mt-1.5 text-emerald-500 text-xs">▹</span>
                {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
