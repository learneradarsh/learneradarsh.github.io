type WhyCardProps = {
  title: string;
  desc: string;
};

export default function WhyCard({ title, desc }: WhyCardProps) {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-gradient-to-br from-white/5 to-transparent">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
