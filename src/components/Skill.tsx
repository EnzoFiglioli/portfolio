import React from "react";

interface SkillProps{
    skill :string
}

const Skill : React.FC<SkillProps> = ({skill}) => {
  return (
    <li className="bg-yellow-400 dark:bg-white p-2 rounded shadow-md dark:text-black">{skill}</li>
  )
}

export default Skill;
