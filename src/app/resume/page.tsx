"use client";
import React from "react";


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
      icon: (
        <svg className="w-60 h-60 text-primary hover:text-[#61dafb] transition-colors duration-300" viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
      ),
      name: "React",
      color: "blue",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg"
          className="w-60 h-60 text-primary group transition-colors duration-300 hover:text-[#ffd600]"
          x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="currentColor" d="M6,42V6h36v36H6z"></path>
          <path className="fill-white group-hover:fill-[#000001] transition-colors duration-300"
            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
        </svg>
      ),
      name: "JavaScript",
      color: "yellow",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          className="w-60 h-60 text-primary hover:text-[#1976d2] transition-colors duration-300"
          viewBox="0 0 48 48">
          <rect width="36" height="36" x="6" y="6" fill="currentColor"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
        </svg>),
      name: "TypeScript",
      color: "blue",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-60 h-60 text-primary hover:text-[#E65100] transition-colors duration-300" viewBox="0 0 48 48">
          <path fill="currentColor" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="currentColor" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
          <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
        </svg>
      ),
      name: "HTML5",
      color: "yellow",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"
          className="w-60 h-60 text-primary hover:text-[#0277BD] transition-colors duration-300"
        >
          <path fill="currentColor" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="currentColor" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
        </svg>
      ),
      name: "CSS3",
      color: "blue",
    },
    {
      icon: (
<div class="w-12 h-12 group">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full fill-gray-500 group-hover:fill-current group-hover:text-[#5d4037] group-hover:text-[#4caf50] group-hover:text-[#dcedc8] group-hover:text-[#81c784]"
        viewBox="0 0 48 48"
    >
        <path d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path>
        <path d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path>
        <path d="M23 28H25V36H23z"></path>
        <path d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path>
        <path d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
    </svg>
</div>

      ),
      name: "MongoDB",
    },
  
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
        className="w-60 h-60 text-primary hover:text-[#F4511E] transition-colors duration-300"
        viewBox="0 0 48 48">
          <path fill="currentColor" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
        </svg>
      ),
      name: "Git",

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
        <Tabs defaultValue="experience"
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
              <div className="bg-[#27272c] p-4 rounded-lg">
                <h3 className="text-2xl font-bold">Bachelors in Computer Science</h3>
                <h4 className="text-sm font-semibold text-accent">University of Central Punjab</h4>

              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="bg-[#27272c] p-4 rounded-lg">
                <h1 className="text-2xl font-bold hover:text-accent-hover transition delay-150  cursor-pointer m-3">{skills.title}</h1>
                {/* <p>{skills.description}</p> */}
                <div className="grid grid-cols-4 gap-4 ">
                  {skills.skillset.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-2 p-4 border-2 border-[#27272c] rounded-lg
                       "
                    >
                      {skill.icon}
                      <p className="text-sm font-semibold">{skill.name}</p>
                    </div>
                  )
                  )}
                </div>
              </div>
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
