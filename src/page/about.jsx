// import ProfileImage from '../assets/photo.jpeg'; 
import { BsExclamationDiamond } from "react-icons/bs";


const About = () => {
    return ( 
        
     <div className='bg-[#030315] h-screen px-2 md:px-[2rem]  font-assistant'>
     <div className='flex justify-between mt-[8rem] gap-10 py-8 md:py-6 font-bold '>
         <BsExclamationDiamond className="text-[#6c6a6a] text-[70px]" />
         <h1 className='text-[#6c6a6a] text-xl sm:text-2xl md:text-3xl lg:text-3xl'>ABOUT</h1>
     </div>
     
     <div className=''>
     <div className="flex items-center justify-center h-screen text-white p-4 md:p-2">
        <p className="w-full max-w-[100%] md:max-w-[70%] pb-16 md:pb-12 text-center text-xl md:text-2xl sm:px-0">
        I am Owolabi Omobanke, a passionate Frontend Developer with 3+ years of experience building responsive, user-friendly web applications. I specialize in React, TypeScript, and Tailwind CSS, with a focus on creating polished designs and seamless user experiences. My commitment to clean, maintainable code and a love for innovation drive me to deliver impactful digital solutions.
        </p>
    </div>

     </div>
    </div>
     );
}
 
export default About;