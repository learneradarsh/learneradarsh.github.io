type AwardCardProps = {
  text: string;
  highlight?: boolean;
};

export default function AwardCard({ text, highlight }: AwardCardProps) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        highlight
          ? "border-emerald-400/40 bg-emerald-400/5"
          : "border-white/10 bg-white/5"
      }`}
    >
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}
