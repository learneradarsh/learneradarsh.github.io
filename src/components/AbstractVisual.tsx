export default function AbstractVisual() {
  return (
    <div className="relative w-full h-full">
      {/* Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
