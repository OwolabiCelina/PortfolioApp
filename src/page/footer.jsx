import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#030315] text-white py-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Get in touch with me...</h1>
                <div className="flex justify-center gap-6 text-2xl">
                    <a
                        href="https://github.com/OwolabiCelina"
                        className="hover:text-[#C081E4]"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/omobanke-celina-o-b43464243/"
                        className="hover:text-[#C081E4]"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/Celina_Omobanky"
                        className="hover:text-[#C081E4]"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
