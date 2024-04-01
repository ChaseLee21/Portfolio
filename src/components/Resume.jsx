function Resume() {
    return (
        <section className="bg-white bg-opacity-85 rounded m-2 p-2 lg:m-4 xl:m-8">
            <h2 className="text-xl md:text-2xl xl:text-4xl text-center font-bold mb-2"><a className="underline text-blue-600 hover:text-blue-950" href="./src/assets/Resume-Chase-Seeberger.pdf" target="_blank" rel="noopener noreferrer">Resume</a></h2>
            <p className="text-center text-base lg:text-xl m-auto max-w-[90%] lg:max-w-[50%] p-2 indent-5">
                I am currently seeking a full-time position as a full stack developer. 
                My resume can be downloaded <a className="underline text-blue-600 hover:text-blue-950" href="./src/Resume-Chase-Seeberger.pdf" target="_blank" rel="noopener noreferrer">here</a> as a PDF.
                My resume is also available on LinkedIn. 
                For more information, please feel free to contact me or connect with me on LinkedIn.
            </p>
        </section>
    );
  }
  
  export default Resume;