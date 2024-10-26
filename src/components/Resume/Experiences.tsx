import React from "react";

const Experiences = () => {
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
        description:
          "I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.",
      },
      {
        title: "Software Developer",
        company: "Freelance",
        date: "2018 - 2020",
        description:
          "I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.",
      },
      {
        title: "ReactJS and NextJS Developer",
        company: "Bytewise",
        date: "2018 - 2020",
        description:
          "I have worked on a variety of projects including e-commerce websites, social media platforms, and personal blogs. I have experience with a variety of technologies including React, Redux, Node.js, Express, MongoDB, PostgreSQL, and GraphQL.",
      },
    ],
  };
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left mb-36">
      {/* <h3 className="text-3xl font-extrabold">{experiences.title}</h3> */}
      {/* <p>{experiences.description}</p> */}
      <div className="flex flex-col ">
        {experiences.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 relative bg-[#27272c] p-4 m-2 align-center hover:shadow-2xl transition-all ease-in-out duration-300"
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-transparent transition-all ease-in-out duration-300
                        hover:bg-accent-hover transform origin-top scale-y-0 hover:scale-y-100"
            />
            <div className="flex justify-between">
              <h4 className="text-2xl font-bold hover:text-accent-hover transition-all ease-in-out duration-300 cursor-pointer">
                {item.title}
              </h4>
              <p className="text-sm text-white">{item.date}</p>
            </div>
            <p className="text-sm text-white ">{item.company}</p>
            <p className="text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
