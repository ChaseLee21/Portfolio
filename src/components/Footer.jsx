function Footer() {
    return (
        <footer className="sticky bg-white flex flex-col justify-center items-center rounded m-2 pt-2 lg:mt-4 xl:mt-8 mx-2 lg:mx-4 xl:mx-8">
            <section className="flex">
                <a className="mx-2" href="https://github.com/ChaseLee21" target="_blank">Github</a>
                <a className="mx-2" href="https://www.linkedin.com/in/chaseseeberger/" target="_blank">LinkedIn</a>
                <p className="mx-2">(208) 995 - 5987</p>
                <p className="mx-2">chase.seeberger@gmail.com</p>
            </section>
            <section>
                <p className="text-sm">Created by Chase Seeberger</p>
            </section>
        </footer>
    );
  }
  
  export default Footer;