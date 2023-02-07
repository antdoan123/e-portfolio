import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiTailwindcss, SiNextdotjs, SiReact, SiCplusplus, SiCsharp, SiJavascript, SiJava} from "react-icons/si";

function Skills() {

    const logo = [
        {
            id:1,
            icons: (
                <SiHtml5 size={'36'} color={'orange'}/>
            ),
            name: 'HTML5',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            icons: (
                <SiCss3 size={'36'} color={'#000FFF'}/>
            ),
            name: 'CSS3',
            style: 'shadow-blue-500',
        },
        {
            id:3,
            icons: (
                <SiTailwindcss size={'36'} color={'#00FFFF'}/>
            ),
            name: 'TailwindCSS',
            style: 'shadow-sky-500',
        },
        {
            id:4,
            icons: (
                <SiNextdotjs size={'36'}/>
            ),
            name: 'NextJS',
            style: 'shadow-white',
        },
        {
            id:5,
            icons: (
                <SiReact size={'36'} color={'#00DFFF'}/>
            ),
            name: 'React',
            style: 'shadow-blue-600',
        },
        {
            id:6,
            icons: (
                <SiCplusplus size={'36'} color={'#004FFF'}/>
            ),
            name: 'C++',
            style: 'shadow-blue-500',
        },
        {
            id:7,
            icons: (
                <SiCsharp size={'36'} color={'violet'}/>
            ),
            name: 'C#',
            style: 'shadow-purple-500',
        },
        {
            id:8,
            icons: (
                <SiJavascript size={'36'}/>
            ),
            name: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id:9,
            icons: (
                <SiJava size={'36'} color={'orange'}/>
            ),
            name: 'Java',
            style: 'shadow-orange-500',
        },
    ]

  return (
    <div name="skills" className='w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className="max-w-screen-4xl p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
            <div className='pb-8'>
                <h2 className="text-4xl font-bold inline border-b-2 border-blue-200">
                    Skills
                </h2>
            </div>
            <div className='text-xl'>
                
            </div>
            <div className='grid grid-cols-3 items-center justify-center text-center md:grid-cols-2 lg:flex gap-8 mt-6 '>
                
                {logo.map(({id, icons, name, style}) => (
                        <div key={id} className="invisible hover:visible hover:scale-105 duration-100">
                            <span className={`shadow-md ${style} visible inline-block ring ring-1 ring-blue-300 p-8 rounded-full `}>
                                {icons}
                            </span>   
                            <p className='font-bold mt-4'>
                                {name}
                            </p>
                        </div>
                        

                    ))}

            </div>

        </div>
    </div>
  )
}

export default Skills