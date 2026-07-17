import React from "react";

function SkillCard({ logo, category, skills, description }) {
  const Logo = logo;
  const skillsChips = () => {
    return skills.map((skill) => {
      return (
        <div
          key={`${skill.name}`}
          className={`${skill.style} font-mono font-bold tracking-wide`}
        >
          {skill.name}
        </div>
      );
    });
  };
  return (
    <div
      className="
      bg-white/5
        border border-white/10
        rounded-3xl
        p-8
        backdrop-blur-lg
        transition-all
        duration-300
        hover:border-orange-400/40
        hover:-translate-y-1
        max-w-md
        "
    >
      <div className="flex flex-row">
        <Logo className="text-4xl text-cyan-400 mx-2" />
        <h3 className="text-xl font-semibold text-blue-300 mb-2">{category}</h3>
      </div>
      <p
        className="
        text-gray-400
        leading-relaxed
        mt-2
        "
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">{skillsChips()}</div>
    </div>
  );
}

export default SkillCard;
