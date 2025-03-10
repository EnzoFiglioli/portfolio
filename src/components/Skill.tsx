import React from "react";

interface SkillProps {
  skill: string;
  logo: string;
}

const Skill: React.FC<SkillProps> = ({ skill, logo }) => {
  return (
    <li className="bg-yellow-400 dark:bg-white p-4 rounded-lg shadow-md dark:text-black text-center">
      <img
        src={logo}
        alt={skill}
        className="mx-auto mb-2 w-16 h-16 object-contain" // Adds image size and alignment
      />
      <p className="text-sm font-semibold">{skill}</p> {/* Smaller font for clarity */}
    </li>
  );
};

export default Skill;
