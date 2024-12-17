import Typescript from '../assets/squared-ts.jpeg';
import SkillsPage from './skillspage';
import ProjectsPage from './projects';
import About from './about';
import Experience from './experience';

const Home = () => {
    return ( 
    <div className="bg-cover bg-custom-bg w-full  min-h-screen font-assistant">

        <div className="flex justify-between px-2 md:px-[4rem] text-[#C081E4] items-center py-[9rem]">
            <div className="section flex-col">
                <h1 className="text-3xl sm:text-4xl font-bold">OWOLABI <br /> OMOBANKE C.</h1>
                <p className='text-4xl mt-4 text-[#BeC0C7]'>FRONTEND DEVELOPER</p>
            </div>
            <div className='w-[150px] h-[100px] text-[#C081E4]'>
                <img src={Typescript} alt="Typescript Icon" />
            </div>
       </div>

       <div className="px-4 sm:px-8 md:px-14 lg:px-20 mt-6 max-w-[1200px] mx-auto">
            <h1 className="text-[#DBDCDF] font-semibold text-3xl sm:text-2xl md:text-3xl">Hi,</h1>
            <p className="text-[#DBDCDF] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-2 w-[70%] max-w-[90%]">
                I am Owolabi Omobanke, an experienced frontend developer with a passion for crafting engaging user experiences. Leveraging my skills in front-end technologies, I deliver polished and efficient solutions from concept to completion.
            </p>
       </div>
      


        <div id='about'>
            <About />
        </div>
    

       <div id='skils'>
        <SkillsPage />
       </div>

       <div id='projects'>
        <ProjectsPage />
       </div>

        <div className=''>
            <Experience />
        </div>
    </div> 
    );
}

export default Home;
