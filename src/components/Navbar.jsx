import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-4xl font-bold">Snapshots.Me</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/ajunjo/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
            </a>
            <a href="https://github.com/d3jo" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            </div>
        </nav>
    );
};

export default Navbar;

