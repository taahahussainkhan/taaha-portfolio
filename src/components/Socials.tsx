import React from 'react'
import Link from "next/link";

import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/taahahussainkhan"},
    {icon: <FaLinkedin/>, path: "https://www.linkedin.com/in/taahahussainkhan/"},
    {icon: <FaTwitter/>, path: "https://www.x.com/taahahussainkha/"},
]

const Socials = ({ containerStyles, iconStyles }: { containerStyles: string; iconStyles: string }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" 
                     className={iconStyles}>
                        {item.icon}
                    
                </Link>
            )
        })}
    </div>
  )
}

export default Socials