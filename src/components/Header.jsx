import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-950 bg-opacity-85 flex flex-row flex-nowrap items-center justify-between">
        <h1 className="text-white font-bold text-xl md:text-2xl xl:text-4xl m-2"><Link to="/">Chase Seeberger</Link></h1>
        <nav className="text-white font-bold text-base md:text-lg xl:text-2xl">
            <ul className="flex flex-row justify-evenly m-2">
                <li className="px-2"><Link to="/">About Me</Link></li>
                <li className="px-2"><Link to="/projects">Projects</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2"><Link to="/resume">Resume</Link></li>
            </ul> 
        </nav>
    </header>
  );
}

export default Header;