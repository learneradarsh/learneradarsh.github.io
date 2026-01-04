type ProjectCardProps = {
  title: string;
  year: string;
  tag: string;
  desc: string;
  link: string;
};

export default function ProjectCard({
  title,
  year,
  tag,
  desc,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="flex justify-between text-sm text-gray-400">
        <span>{year}</span>
        <span className="text-emerald-400">{tag}</span>
      </div>

      <h3 className="mt-4 text-xl font-medium">{title}</h3>

      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </a>
  );
}
