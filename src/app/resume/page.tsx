"use client";
import React from "react";

import { FaHtml5, FaCss3, FaReact, FaJs, FaNodeJs } from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiGit,
  SiGithub,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.", // I am always looking to learn new technologies and improve my skills. I am currently looking for a full-time position as a software developer.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Taaha Hussain Khan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 - 310 - 4515488",
    },
    {
      fieldName: "Experience",
      fieldValue: "Intermediate",
    },
    {
      fieldName: "Skype",
      fieldValue: "taahahussainkhan",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "taaha128@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};
// Experience dates
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL. I am always looking to learn new technologies and improve my skills. I am currently looking for a full-time position as a software developer.",
  items: [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      date: "2020 - Present",
      // description: 'I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.'
    },
    {
      title: "Software Developer",
      company: "Freelance",
      date: "2018 - 2020",
      // description: 'I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.'
    },
    {
      title: "ReactJS and NextJS Developer",
      company: "Bytewise",
      date: "2018 - 2020",
      // description: 'I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.'
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  items: [
    {
      university: "Full Stack Developer",
      major: "Freelance",
      date: "2020 - Present",
      // description: 'I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.'
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL. I am always looking to learn new technologies and improve my skills. I am currently looking for a full-time position as a software developer.",
  skillset: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiHeroku />,
      name: "Heroku",
    },
    {
      icon: <SiNetlify />,
      name: "Netlify",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue = "experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-extrabold">{experiences.title}</h3>
                <p>{experiences.description}</p>
                <div className="grid grid-cols-2 ">
                  {experiences.items.map((item, index) => (
                    <div
                      key={index}
                      className=" gap-2 border-l-4 bg-[#27272c] pl-4 m-2 h-[180px] flex align-center"
                    >
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-sm text-white">{item.company}</p>
                      <p className="text-sm text-white">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  );
};

export default Resume;
