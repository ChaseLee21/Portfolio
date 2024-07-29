import { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileHeader() {
    const [openNav, setOpenNav] = useState(false);

    const handleNavClose = () => {
        setOpenNav(false);
    }

    return (
        <div className=''>
            <header className="bg-blue-950 text-white flex flex-col">
                <div className='flex items-center p-1 font-bold' to="/">
                    <button className="text-4xl mx-2" onClick={() => setOpenNav(!openNav)}>&#9776;</button>
                    <h1 className="text-start text-2xl mx-2">Chase Seeberger <br /> Junior Web Developer</h1>
                </div>
                {openNav && (
                    <nav className="bg-blue-950 flex flex-col">
                        <ul className="flex flex-col">
                            <li className="p-2" onClick={() => handleNavClose()}><Link to="/">About Me</Link></li>
                            <li className="p-2" onClick={() => handleNavClose()}><Link to="/projects">Projects</Link></li>
                            <li className="p-2" onClick={() => handleNavClose()}><Link to="/resume">Resume</Link></li>
                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
}

export default MobileHeader;