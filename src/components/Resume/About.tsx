import React from 'react'

const About = ()=> {
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
    return (
        <>
        Hello i am about
        </>
    )
}

export default About;