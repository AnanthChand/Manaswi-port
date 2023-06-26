import Skill, { SkillProps } from "./Skill";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Skills({}: SkillProps) {
  const skills: SkillProps[] = [
    {
      src: "/premiere-pro.png",
      percentage: 60,
      skillName: "Adobe PP"
    },
    {
      src: "/indesign.png",
      percentage: 80,
      skillName: "indesign"
    },
    {
      src: "/illustrator.png",
      percentage: 70,
      skillName:"illustrator"
    },
    {
      src: "/illustrator-draw.png",
      percentage: 80,
      skillName:"illustrator"
    },
    {
      src: "/photoshop-lightroom.png",
      percentage: 80,
      skillName:"photoshop-L"
    },
    {
      src: "/xd.png",
      percentage: 60,
      skillName:"Adobe XD"
    },
   
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/bg6.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative border border-gray-300  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto  items-center"
      >
        <h1 className=" absolute top-10 uppercase tracking-[10px] text-gray-100 text-2xl">
          skills
        </h1>
        <h3 className="text-gray-300 absolute top-20 uppercase tracking-[1px] text-sm">
          Hover over to know current profieciency.
        </h3>

        <div className="absolute top-40 md:grid  md:grid-cols-3 md:gap-4 gap-1 m-5 ">
          {skills.map((skill, index) => (
            <Skill key={index} src={skill.src} percentage={skill.percentage} skillName={skill.skillName}/>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
