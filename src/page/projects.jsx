import { FaLessThanEqual } from "react-icons/fa";
import Img1 from '../assets/translator.png'
import Img3 from "../assets/to-do.png"



const projects = [{
    title: "Translator App",
    number: "01",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,\
            fugit perferendis. Quasi nemo, harum accusantium dolorum earum error voluptatem exercitationem.\
            Ex facilis nam aspernatur? Soluta iusto possimus explicabo in qui.",
    stack: "React, Typescript, Tailwind",
    link: "https://translator-app-git-main-owolabicelinas-projects.vercel.app/",
    img: Img1,
    github: "https://github.com/OwolabiCelina/Translator-App"

},
{
    title: "Social Chat App",
    number: "01",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,\
            fugit perferendis. Quasi nemo, harum accusantium dolorum earum error voluptatem exercitationem.\
            Ex facilis nam aspernatur? Soluta iusto possimus explicabo in qui.",
    stack: "React, Typescript, Tailwind",
    link: "https://translator-app-git-main-owolabicelinas-projects.vercel.app/",
    img: Img1,
    github: "https://translator-app-git-main-owolabicelinas-projects.vercel.app/"

},

{
    title: "Todo App",
    number: "03",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,\
            fugit perferendis. Quasi nemo, harum accusantium dolorum earum error voluptatem exercitationem.\
            Ex facilis nam aspernatur? Soluta iusto possimus explicabo in qui.",
    stack: "React, Typescript, Tailwind",
    link: "https://celinas-to-do-app.netlify.app/",
    img: Img3,
    github: "https://github.com/OwolabiCelina/My-ToDo/tree/master"

},

{
    title: "Ecommerce",
    number: "04",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,\
            fugit perferendis. Quasi nemo, harum accusantium dolorum earum error voluptatem exercitationem.\
            Ex facilis nam aspernatur? Soluta iusto possimus explicabo in qui.",
    stack: "React, Typescript, Tailwind",
    link: "https://translator-app-git-main-owolabicelinas-projects.vercel.app/",
    img: Img1,
    github: "https://translator-app-git-main-owolabicelinas-projects.vercel.app/"
},


]

const ProjectsPage = () => {


    return (
        <div className="min-h-screen items-center bg-[#030315] text-white">

            <div className='px-2 md:px-[4rem]'>
                <div className='relative flex justify-between '>
                    <h1 className='text-[#6c6a6a] text-base sm:text-xl md:text-2xl lg:text-3xl'>PROJECTS</h1>
                    <FaLessThanEqual className="text-[#6c6a6a] text-[70px]" />
                </div>
                <div className=''>
                    <h1 className="text-center text-2xl font-bold my-8">Featured Works and Projects Showcase</h1>

                </div>
            </div>



            <div className='px-8'>
                {
                    projects.map((project) => (
                        <div key={  project.number} className='lg:flex my-8 py-8 rounded-md justify-around items-center w-full max-w-7xl p-2 px-8 bg-[#212020] text-white '>
                            <div className="flex-1 px-4">
                                <h1 className="text-2xl md:text-3xl font-semibold"><span className='text-[#C081E4]'>01</span> {project.title}</h1>
                                <p className=' mt-4 '>
                                    {project.desc}
                                </p>
                                <div className='flex gap-3 mt-4 text-sm md:text-sm'>
                                    <p className="font-semibold">Stack:</p>
                                    <p className="">{project.stack}</p>
                                   
                                </div>
                                <div className='flex gap-3 mt-4 items-center'>
                                    <a href={project.link} className="text-[#C081E4] hover:underline border-2 border-[#C081E4] rounded-lg p-2">
                                        Visit site
                                    </a>
                                    <a href={project.github} className="text-[#C081E4] hover:underline">
                                        Go to GitHub
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 px-4 flex justify-center">
                                <img src={project.img} alt="School of Walk project screenshot" className='w-full h-auto object-contain rounded m-4' />
                            </div>
                        </div>
                    ))
                }

                
            </div>
        </div>
    );
}

export default ProjectsPage;
