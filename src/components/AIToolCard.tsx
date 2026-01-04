type AIToolCardProps = {
  name: string;
};

export default function AIToolCard({ name }: AIToolCardProps) {
  return (
    <div className="flex items-center justify-center border border-white/10 rounded-lg py-6 bg-white/5 hover:bg-white/10 transition">
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
}
