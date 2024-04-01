function Footer() {
    return (
        <footer className="sticky bg-white bg-opacity-85 flex flex-col justify-center items-center rounded m-2 pt-2 lg:mt-4 xl:mt-8 mx-2 lg:mx-4 xl:mx-8">
            <section className="flex">
                <a className="mx-2 text-base md:text-lg lg:text-xl underline hover:text-blue-950 text-blue-600" href="https://github.com/ChaseLee21" target="_blank">Github</a>
                <a className="mx-2 text-base md:text-lg lg:text-xl underline hover:text-blue-950 text-blue-600" href="https://www.linkedin.com/in/chaseseeberger/" target="_blank">LinkedIn</a>
                <p className="mx-2 text-base md:text-lg lg:text-xl text-blue-600">2089955987</p>
                <p className="mx-2 text-base md:text-lg lg:text-xl text-blue-600">chase.seeberger@gmail.com</p>
            </section>
            <section className="my-2">
                <p className="text-sm">Created by Chase Seeberger</p>
            </section>
        </footer>
    );
  }
  
  export default Footer;