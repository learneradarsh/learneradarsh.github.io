import React from "react";

type WhyCardProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export default function WhyCard({ title, desc, icon }: WhyCardProps) {
  return (
    <div className="flex flex-col items-start p-4 hover:bg-white/5 rounded-xl transition-colors group">
      <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
