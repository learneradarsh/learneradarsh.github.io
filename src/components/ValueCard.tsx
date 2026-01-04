type ValueCardProps = {
  title: string;
  desc: string;
};

export default function ValueCard({ title, desc }: ValueCardProps) {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-white/5">
      <h3 className="text-lg font-medium text-emerald-400">
        {title}
      </h3>
      <p className="mt-3 text-gray-300 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
