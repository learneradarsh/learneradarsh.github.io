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
    <div className="mb-14 border border-white/10 rounded-xl p-8 bg-white/5">
      <h3 className="text-xl font-semibold">{company}</h3>
      <p className="text-gray-400 text-sm">
        {role} · {period} · {location}
      </p>

      <ul className="mt-6 space-y-2 text-gray-300 text-sm list-disc list-inside">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
