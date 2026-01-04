import React from "react";

type TechCategoryProps = {
  title: string;
  skills: string[];
  icon: React.ReactNode;
};

export default function TechCategory({ title, skills, icon }: TechCategoryProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all hover:bg-white/10 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
