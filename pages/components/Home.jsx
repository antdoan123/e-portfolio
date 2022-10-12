import React from 'react'
import { AiOutlineGithub, AiOutlineFilePdf, AiFillLinkedin, AiFillMail, AiOutlineCaretDown} from 'react-icons/ai';
import { FaMehBlank } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Home = () => {


        const links = [
        {
            id: 1,
            icons: (
            <AiOutlineGithub size={'36'}/>
            ),
            href: "https://github.com/antdoan123",
        },
        {
            id: 1,
            icons: (
            <AiFillLinkedin size={"36"}/>
            ),
            href: "https://www.linkedin.com/in/anthony-doan-9176a21b8/",
        },
        {
            id: 1,
            icons: (
            <AiFillMail size={"36"}/>
            ),
            href: "mailto:antdoan1999@gmail.com",
        },
        {
            id: 1,
            icons: (
            <AiOutlineFilePdf size={"36"}/>
            ),
            href: "/resume.pdf",
        },
    ]
    

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:text-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-7xl md:text-5xl font-bold text-white '>Nice to Meet You👋
                </h2>

                <p className='text-gray-500 py-4 max-w-md mt-6'>
                    My name is Anthony Doan and I am a full-stack developer graduating with a computer engineering degree in Dec/2022. Currently,
                    I love working on web application using technologies like React, Tailwind, Next JS. In my free time,
                    I love cooking, playing basketball, and playing valorant.
                </p>
                <div className="flex flex-nowrap pt-4 space-x-8 justify-start px-12 md:px-24 mt-4 text-gray-500">

                    {links.map(({icons, href}) => (

                        <a
                         
                         href={href}
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="hover:text-blue-300 hover:scale-105 duration-200"
                        >
                            {icons}
                        </a>

                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home