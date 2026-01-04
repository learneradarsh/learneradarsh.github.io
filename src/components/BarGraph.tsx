type BarGraphProps = {
  label: string;
  value: number;
};

export default function BarGraph({ label, value }: BarGraphProps) {
  const width = Math.min((value / 3) * 100, 100);

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>{label}</span>
        <span>{value} yrs</span>
      </div>
      <div className="h-2 bg-white/10 rounded">
        <div
          className="h-2 bg-emerald-400 rounded"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
