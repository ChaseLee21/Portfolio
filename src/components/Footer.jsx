function Footer() {
    return (
        <footer className="bg-white bg-opacity-85 flex flex-col w-auto p-2 m-2 rounded my-6 lg:my-6 lg:max-w-[66vw] lg:min-w-[66vw] lg:mx-auto">
            <div className="flex justify-center">
                <p className="mx-2 text-base md:text-lg lg:text-xl text-blue-600">chase.seeberger@gmail.com</p>
                <p className="mx-2 text-base md:text-lg lg:text-xl text-blue-600">2089955987</p>
            </div>
            <div className="flex justify-center">
                <a className="mx-2 text-base md:text-lg lg:text-xl underline hover:text-blue-950 text-blue-600" href="https://github.com/ChaseLee21" target="_blank">Github</a>
                <a className="mx-2 text-base md:text-lg lg:text-xl underline hover:text-blue-950 text-blue-600" href="https://www.linkedin.com/in/chaseseeberger/" target="_blank">LinkedIn</a>
            </div>
            <div className="flex justify-center">
                <p className="text-sm">Created by Chase Seeberger</p>
            </div>
        </footer>
    );
  }
  
  export default Footer;