import React from 'react'

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
    return (
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
    )
}

export default Experiences;