import { skillsData } from "../components/card-details";
import Card from "../components/card";
import { PiHeadCircuitDuotone } from "react-icons/pi";


const SkillsPage = () => {
    return ( 
      <div className="relative ">
        <div className="h-screen bg-[#030315] pt-10">
            <div className="flex justify-between text-[#6c6a6a] items-center text-base sm:text-xl md:text-2xl lg:text-3xl px-8 md:px-4 font-bold"> 
                <p className='text-[#6c6a6a] text-xl sm:text-2xl md:text-3xl lg:text-3xl'>SKILLS</p>
                <PiHeadCircuitDuotone className="text-[#6c6a6a] text-[70px]"/>
            </div>
            <div className=" text-white flex flex-col justify-center items-center mt-10 md:mt-14">
                <p className="mb-10 text-center text-xl">My focused technologies: Current areas of proficiency</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center items-center">
                    {
                        skillsData.map((skill, index) => (
                            <Card key={index} image={skill.image} />
                        ))
                    }
                </div>
            </div>
        </div>

          
      </div>
    );
}
 
export default SkillsPage;
