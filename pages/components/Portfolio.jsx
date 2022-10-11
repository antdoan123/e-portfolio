import React from 'react'
import { AiOutlineGithub} from 'react-icons/ai';

function Portfolio() {
    const portfolios = [
        {
          id: 1,
          tech: "C#/ .NET/ LocalDB",
          title: "Restaraunt Locator",
          description: "A full-stack desktop application that allows users to find a nearby resteruant based on their preferences using Yelp's API. Users will also be prompt to create an account which allows them to have their own unique profile and each account is stored in a local databased. The users will also have accessed to their own dashboard.",
          href: "https://github.com/antdoan123",
        },
        {
          id: 2,
          tech: "C / PICK-IT4",
          title: "Traffic Light Simulator",
          description: "Incorporated a screen that display a traffic light simulation as well as a switch that activates a crosswalk timer using seven-segment display. A photo sensor is used to sense whether the traffic controller is operating in Day Mode or Night Mode. This is all processed using a PIC18F4620.",
          href: "https://github.com/antdoan123",
        },
        {
          id: 3,
          tech: "C# / .NET",
          title: "Wallpaper Taskbar",
          description: "A user interface for desktop backgrounds that displays the current time and date along with a schedule of the user's classes that the user stores in a local databased. By clicking on the class name, it will redirect them directly to the zoom link. The user may also change the orientation of the GUI.",
          href: "https://github.com/antdoan123",
        },
        {
          id: 4,
          tech: "TailwindCSS / Next.JS",
          title: "This Website",
          description: "This website was build using TailwindCSS and Next.JS. Flexbox are used to create cards that stores informations. Basic TailwindCSS animation are used to make the site more responsive. Next.JS is used to create a server-side rendering website as well as providing better structures for the codes.",
          href: "https://github.com/antdoan123",
        },
      ];

  return (
    <div name="portfolio" className='w-full bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className="max-w-screen-xlg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <h2 className="text-4xl font-bold inline border-b-2 border-blue-200">
                    Portfolio
                </h2>
            </div>
            <div>
                Check out some of my works!
            </div>
              <div className="mt-6 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8" >
                  {portfolios.map(({tech, title, description, href}) => (

                      <div className="border px-8 py-8 rounded-3xl outline outline-1 outline-blue-300">
                        <h2 className="text-base font-medium text-blue-300 mb-1">{tech}</h2>
                            <h1 className="text-2xl font-semibold mb-3">{title}</h1>
                            <p className="leading-relaxed mb-3">{description} 
                            </p>
                          <div className='flex justify-end hover:text-blue-300 cursor-pointer space-x-2 space-y-1'>

                              <AiOutlineGithub size={'30'}/> 
                              <p>View Code</p>

                          </div>
                      </div>
                  ))}

              </div>
        </div>
    </div>
  )
}

export default Portfolio