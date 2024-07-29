import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileHeader() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <div>
            <header className="bg-blue-950 bg-opacity-85 flex flex-row flex-nowrap items-center justify-between">
            <div className='flex text-center items-center p-1 ' to="/">
                <button className="text-white font-bold text-4xl mx-2" onClick={() => setOpenNav(!openNav)}>&#9776;</button>
                <h1 className="text-white text-start font-bold text-2xl mx-2">Chase Seeberger <br /> Junior Web Developer</h1>
            </div>
            {openNav && (
                <nav className="absolute left-0 right-0 text-white text-start bg-blue-950 bg-opacity-85">
                <ul className="flex flex-col">
                    <li className="p-2"><Link to="/">About Me</Link></li>
                    <li className="p-2"><Link to="/projects">Projects</Link></li>
                    <li className="p-2"><Link to="/resume">Resume</Link></li>
                </ul>
                </nav>
            )}
            </header>
        </div>
    );
}

export default MobileHeader;