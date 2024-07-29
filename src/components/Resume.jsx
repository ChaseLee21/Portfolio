function Resume() {
    return (
        <div>
            <main className="bg-white bg-opacity-85 flex flex-col w-auto p-2 m-2 rounded my-6 lg:my-6 lg:max-w-[66vw] lg:min-w-[66vw] lg:mx-auto">
                <h2 className="text-4xl text-center font-bold mb-2">Resume</h2>
                <p className="m-auto text-base p-2 lg:w-5/6">
                    My resume via google docs is viewable <a className="underline text-blue-600 hover:text-blue-950" href="https://docs.google.com/document/d/1LSksgt3VEu0PH06z9tfKMkIzejsrOjIq2umAH9SYB5w/edit#heading=h.f2c7u4yny38a" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
                <p className="m-auto text-base p-2 lg:w-5/6">
                    I am currently seeking a full-time position as a junior web developer. 
                    I am living in Salem, Oregon and may be willing to relocate for the right opportunity.
                </p>
            </main>
        </div>
    );
  }
  
  export default Resume;