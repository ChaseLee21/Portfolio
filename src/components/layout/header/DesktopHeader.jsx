import { Link } from 'react-router-dom';

function DesktopHeader() {

    return (
        <div>
            <header className="bg-blue-950 bg-opacity-85 flex flex-row flex-nowrap items-center justify-between">
            <div className='flex flex-row text-center items-center' to="/">
                <h1 className="text-white font-bold text-4xl mx-2">Chase Seeberger <br /> Junior Web Developer</h1>
            </div>
            <nav className="text-white font-bold text-center text-base md:text-lg xl:text-2xl">
                <ul className="flex flex-row justify-evenly m-2">
                    <li className="px-2"><Link to="/">About Me</Link></li>
                    <li className="px-2"><Link to="/projects">Projects</Link></li>
                    <li className="px-2"><Link to="/resume">Resume</Link></li>
                </ul> 
            </nav>
            </header>
        </div>
    );
}

export default DesktopHeader;


