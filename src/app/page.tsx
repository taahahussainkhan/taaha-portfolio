"use client"
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
   const resume_url = "https://drive.google.com/file/d/1wySGLgTUP6RvSeIp3K16Rrk1TMNQ0VCN/view?usp=sharing"
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
   e.preventDefault()
    window.open(resume_url, "_blank")
  }
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl mb-7">software developer</span>
            
            <h1 className="h2">
              Hello, i am <br />{" "}
              <TypeAnimation 
            sequence={[
              'taaha hussain khan',
              2000, 
              'software engineer',
            ]}
            wrapper="span"
            speed={60}
            className="h1 text-accent"
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            />
              {/* <span className="h1 text-accent">taaha hussain khan</span> */}
            </h1>
            <p className="max-w-[500px] mb-9 mt-[7px] text-white/80">
              I excel at crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a
                href="" 
                download
              />
              <Button
                variant="outline"
                size="lg"
                className=" flex items-center gap-2"
                onClick={handleDownload}
              >
                <span className="">DOWNLOAD RESUME</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-588"/>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
