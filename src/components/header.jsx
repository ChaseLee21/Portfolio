function Header() {

  return (
    <header className="bg-blue-950 flex flex-row flex-nowrap items-center justify-between">
        <h1 className="text-white font-bold text-xl md:text-2xl xl:text-4xl m-2">Chase Seeberger</h1>
        <nav className="text-white font-bold text-base md:text-lg xl:text-2xl">
            <ul className="flex flex-row justify-evenly m-2">
            {/* TODO: update nav to use react-router-dom */}
                <li className="px-2"><a href="#about">About Me</a></li>
                <li className="px-2"><a href="#projects">Projects</a></li>
                <li className="px-2"><a href="#contact">Contact</a></li>
                <li className="px-2"><a href="#contact">Resume</a></li>
            </ul> 
        </nav>
    </header>
  );
}

export default Header;