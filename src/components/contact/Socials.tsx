import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedin,FaGitlab,FaSquareInstagram,FaMedium   } from "react-icons/fa6";


const Socials = () => {
    interface LinkType {
        name: string,
        icon: JSX.Element,
        url: string
    }

    const links: LinkType[] = [
        {
            name: 'Github',
            icon: <FaGithub/>,
            url: 'www.github.com/taahahussainkhan'
        },
        {
            name: 'GitLab',
            icon: <FaGitlab />,
            url: 'www.gitlab.com/taahahussainkhan'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin/>,
            url: 'www.linkedin.com/in/taahahussainkhan'
        },
        {
            name: 'Medium',
            icon: <FaMedium />,
            url: 'www.medium.com/taahahussainkhan'
        },
        {
            name: 'Instagram',
            icon: <FaSquareInstagram />,
            url: 'www.instagram.com/taahahussainkhan'
        }
    ]
    return (
        <div className="w-[40%] p-6 flex flex-col gap-4">

            <ul>
                {links.map((link, index) => (
                    <li key={index} className="">
                        <Link href={link.url} className="flex items-center justify-start gap-2 hover:text-accent-hover">{link.name} {link.icon} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Socials;