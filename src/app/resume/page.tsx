"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Skills from "@/components/Resume/Skills";
import Education from "@/components/Resume/Education";
import Experiences from "@/components/Resume/Experiences";
import About from "@/components/Resume/About";

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
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto flex">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] w-full"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] max-h-[75vh] w-full overflow-y-auto scrollbar-none">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <Experiences />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <Skills />
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
