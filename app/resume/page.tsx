"use client";

import React from "react";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPostman } from "react-icons/si";
import {
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaFigma,
  FaPython,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kingsley Udeh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 916 873 0140",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "keengsleyudeh@gmail.com",
    }
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
"Results-driven Frontend Developer with 4+ years of experience building scalable, high-performance websites, web applications and PWAs. Proficient in React, Next.js, TypeScript, and JavaScript, with expertise in state management, UI frameworks, and performance optimization. Experienced in integrating APIs, maintaining design consistency, and enhancing user experience",
  items: [
    {
      company: "Ceed Venture Studio",
      position: "Frontend Engineer",
      duration: "2024 - present",
    },
    {
      company: "Styloza",
      position: "Lead Frontend Engineer",
      duration: "2024",
    },
    {
      company: "Smart World Research Hub",
      position: "Full-Stack Engineer",
      duration: "2024",
    },
    {
      company: "Cardioll",
      position: "Frontend Engineer",
      duration: "2024",
    },
    {
      company: "Motenrise",
      position: "Frontend Developer",
      duration: "2022 - 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I graduated with a First Class Honors (4.7/5.0) from the Department of Mechatronics Engineering, Federal University of Technology, Owerri where i exceled in relevant software development courses. I also enrolled in other software development courses to upskill",
    // "I am currently pursuing a degree in Electrical Electronics Engineering at the Federal University Of Technology Owerri, where I am building a strong foundation in engineering principles and technologies. Additionally, I have studied fullstack development at Zero to Mastery Academy, gaining practical skills in both frontend and backend development. This combination of formal education and specialized training equips me with a diverse skill set to tackle complex projects in various domains.",
  items: [
    {
      institution: "Federal University Of Tecnhnology Owerri",
      degree: "Mechatronics Engineering",
      duration: "2018 - 2024",
    },
    {
      institution: "MDEEG Academy",
      degree: "Frontend Development",
      duration: "2024",
    },
    {
      institution: "ALX",
      degree: "Front-End Web Pro-Development",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Software Development",
      duration: "2020 - 2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: [
    {
      name: "Programming Languages",
      content: "JavaScript, TypeScript, Python, HTML, CSS",
    },
    {
      name: "Software Development",
      content: "ReactJS, Redux, NextJS, HTML5, TailwindCSS, SCSS, NodeJs, Supabase, Firebase",
    },

    {
      name: "Tools and Technologies",
      content: "Git, Docker, Google Workspace, Postman",
    },
    {
      name: "Prototyping",
      content: "Miro, Figma",
    },
    {
      name: "Soft Skills",
      content:
        "Problem-solving, Collaboration, Project Management, Communication, Leadership",
    },
  ],
  skillsList: [
    { icon: <FaHtml5 />, name: "html %" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaPython />, name: "python" },
    { icon: <FaReact />, name: "reactjs" },
    { icon: <FaNodeJs />, name: "nodejs" },
    { icon: <SiNextdotjs />, name: "nextjs" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaFigma />, name: "figma" },
    { icon: <FaGithub />, name: "github" },
    { icon: <FaGoogle />, name: "google workspace" },
    { icon: <SiTypescript />, name: "typescript" },
    { icon: <SiPostman />, name: "postman" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutMe">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item) => (
                      <li
                        key={item.company}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item) => (
                      <li
                        key={item.institution}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 space-y-5 mx-auto xl:mx-0">
                    {skills.description.map((item) => (
                      <ul key={item.name}>
                        <p className="text-white/90 font-semibold text-xl">
                          {item.name}
                        </p>
                        <li>{item.content}</li>
                      </ul>
                    ))}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill) => (
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl group grid place-items-center">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutMe"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item) => (
                    <li
                      key={item.fieldName}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Page;
