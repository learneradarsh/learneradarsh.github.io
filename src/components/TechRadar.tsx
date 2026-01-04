import React from "react";

const data = [
  { subject: "Frontend Arch", A: 95, fullMark: 100 },
  { subject: "Backend & Scale", A: 85, fullMark: 100 },
  { subject: "Cloud & DevOps", A: 80, fullMark: 100 },
  { subject: "AI & Innovation", A: 90, fullMark: 100 },
  { subject: "Tech Leadership", A: 95, fullMark: 100 },
];

const size = 300;
const center = size / 2;
const radius = size / 2 - 40;
const angleSlice = (Math.PI * 2) / data.length;

function getCoordinates(value: number, index: number) {
  const angle = index * angleSlice - Math.PI / 2;
  const r = (value / 100) * radius;
  const x = center + r * Math.cos(angle);
  const y = center + r * Math.sin(angle);
  return { x, y };
}

export default function TechRadar() {
  const points = data
    .map((d, i) => {
      const { x, y } = getCoordinates(d.A, i);
      return `${x},${y}`;
    })
    .join(" ");

  const bgPoints = data
    .map((_, i) => {
      const { x, y } = getCoordinates(100, i);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl">
      <h3 className="text-xl font-semibold mb-6 text-emerald-400">
        Tech Lead Competency Radar
      </h3>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Polygon */}
        <polygon
          points={bgPoints}
          fill="none"
          stroke="#374151"
          strokeWidth="1"
        />
        {/* Inner Grid Circles (approximate polygons) */}
        {[25, 50, 75].map((level) => (
          <polygon
            key={level}
            points={data
              .map((_, i) => {
                const { x, y } = getCoordinates(level, i);
                return `${x},${y}`;
              })
              .join(" ")}
            fill="none"
            stroke="#374151"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        ))}

        {/* Axes */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(100, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#374151"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Polygon */}
        <polygon
          points={points}
          fill="rgba(52, 211, 153, 0.2)"
          stroke="#34D399"
          strokeWidth="2"
        />

        {/* Data Points */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(d.A, i);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="#34D399"
              className="hover:r-6 transition-all duration-300"
            />
          );
        })}

        {/* Labels */}
        {data.map((d, i) => {
          const { x, y } = getCoordinates(115, i);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#9CA3AF"
              fontSize="12"
              className="font-medium"
            >
              {d.subject}
            </text>
          );
        })}
      </svg>
      <p className="mt-6 text-sm text-gray-400 text-center max-w-xs">
        Balanced expertise across engineering, architecture, and leadership.
      </p>
    </div>
  );
}
