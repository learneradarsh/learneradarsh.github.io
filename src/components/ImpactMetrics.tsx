import React from "react";

type MetricProps = {
  value: string;
  label: string;
  subtext?: string;
  color?: string;
};

function MetricItem({ value, label, subtext, color = "text-emerald-400" }: MetricProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors group">
      <div className={`text-4xl md:text-5xl font-bold ${color} mb-2 group-hover:scale-110 transition-transform`}>
        {value}
      </div>
      <div className="text-white font-medium text-lg whitespace-nowrap">{label}</div>
      {subtext && <div className="text-gray-500 text-xs mt-1">{subtext}</div>}
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <MetricItem
        value="100M+"
        label="Users Impacted"
        subtext="High-traffic systems"
      />
      <MetricItem
        value="7+"
        label="Years Exp."
        subtext="Full-Stack & Cloud"
      />
      <MetricItem
        value="10+"
        label="Engineers Led"
        subtext="Mentorship & Growth"
      />
      <MetricItem
        value="38%"
        label="Optimization"
        subtext="Regression Reduction"
      />
    </div>
  );
}
