import React from "react";

function SkillCard({ logo, category, skills, description }) {
  const Logo = logo;
  const skillsChips = () => {
    return skills.map((skill) => {
      return (
        <div
          key={`${skill.name}`}
          className="skill-chip"
        >
          {skill.name}
        </div>
      );
    });
  };
  return (
    <div
      className="skill-card"
    >
      <div className="skill-card-heading">
        <span className="skill-icon"><Logo aria-hidden="true" /></span>
        <h4>{category}</h4>
      </div>
      <p className="skill-description">
        {description}
      </p>
      <div className="skill-chip-list">{skillsChips()}</div>
    </div>
  );
}

export default SkillCard;
