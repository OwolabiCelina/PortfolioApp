import { FiPlus } from "react-icons/fi";

const experiences = [{
    number: "01",
    position: "Frontend Developer",
    icon: <FiPlus />,
    year: "April 2024 - present",
    company: "Condueet, Lagos",

},

{
    number: "02",
    position: "Frontend Developer",
    icon:<FiPlus />,
    year: "Feb 2023 - March 2024",
    company: "Travelway Africa, Lagos",

},

{
    number: "03",
    position: "Frontend Developer Intern",
    icon: <FiPlus />,
    year: "March 2022 - Dec 2022",
    company: "Folio Resources",

}

]


const Experience = () => {
    return ( 
        <div className='h-screen overflow-hidden'>
            <div className='text-white pt-8 bg-[#030315]'>
                <div className="mt-10 items-center justify-items-center relative w-[100%]">
                    <div className='text-4xl md:text-6xl text-[#6c6a6a]'>
                        <h1>EXPERIENCE</h1>
                    </div>
                    <div className='absolute right-0 md:top-7 md:right-32 text-[#877e9d] font-semibold'>
                        <p className=" ">A Story of Growth, Learning & Professional Development</p>
                    </div>
                </div>

                {
                    experiences.map((experience) =>(
                        <div key={experience.number} className="flex flex-col py-8 px-2 md:px-[2rem] ">
                    <div className="px-8 md:px-6 ">
                        <h1>{experience.position}</h1>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className="flex-shrink-0">
                            <p className="text-xl">{experience.icon}</p>
                        </div>
                        <div className="text-right">
                            <p>{experience.year}</p>
                        </div>
                    </div>
                    <div className="px-8 md:px-6 mt-0">
                        <h2>{experience.company}</h2>
                    </div>
                    <hr className="mt-2"/>
                </div>

                    ))
                }
            </div>
       </div>

     );
}
 
export default Experience;