// import ProfileImage from '../assets/photo.jpeg'; 
import { BsExclamationDiamond } from "react-icons/bs";


const About = () => {
    return ( 
        
     <div className='bg-[#030315] h-screen px-2 md:px-[2rem]  font-assistant'>
     <div className='flex justify-between mt-[8rem] gap-10 px-8 md:px-4 font-bold '>
         <BsExclamationDiamond className="text-[#6c6a6a] text-[70px]" />
         <h1 className='text-[#6c6a6a] text-base sm:text-xl md:text-2xl lg:text-3xl'>ABOUT</h1>
     </div>
     
     <div className=''>
     <div className="flex items-center justify-center min-h-screen text-white">
        <p className="w-full max-w-[50%] text-center px-4 sm:px-0">
            Im a Front-End Developer with 3 years of experience in SEO, which gives me a comprehensive understanding of website structure and optimization requirements. Im passionate about creating websites and developing robust applications.
        </p>
    </div>

     </div>
    </div>
     );
}
 
export default About;