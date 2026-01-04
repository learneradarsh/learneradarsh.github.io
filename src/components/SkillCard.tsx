type SkillCardProps = {
  title: string;
  skills: string;
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-lg font-medium text-emerald-400">
        {title}
      </h3>
      <p className="mt-3 text-gray-300 text-sm leading-relaxed">
        {skills}
      </p>
    </div>
  );
}
