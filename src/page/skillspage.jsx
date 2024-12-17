import { skillsData } from "../components/card-details";
import Card from "../components/card";
import { FaHeadSideMask } from "react-icons/fa";


const SkillsPage = () => {
    return ( 
      <div className="relative ">
        <div className="h-screen bg-[#030315]">
            <div className="flex justify-between text-[#6c6a6a] text-base sm:text-xl md:text-2xl lg:text-3xl px-8 md:px-[2rem] text-[#6c6a6a] font-bold">SKILLS <FaHeadSideMask size={70}/> </div>
            <div className=" ] text-white flex flex-col justify-center items-center">
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
