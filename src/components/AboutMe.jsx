function AboutMe() {
    return (
        <section className="bg-white bg-opacity-85 rounded m-2 p-2 lg:m-4 xl:m-8">
            <h2 className="font-bold text-xl md:text-2xl xl:text-4xl m-2 text-center">About Me</h2>
            <div className="flex flex-col justify-center items-center">
                <figure className="flex justify-center items-center">
                    <img className="rounded-md m-3 max-w-[30vw]" src={"/me-at-the-beach.jpg"} alt="Me at the beach" />
                    <figcaption className="text-center max-w-[90%] lg:max-w-[50%]">
                        My web development journey started when I was 14 in high school and I took a class on HTML, CSS, and Javascript.
                        I enjoyed writing code and seeing how I could create an application that could be used by others to help them.
                        Computers and technology has always interested me and I love learning about how they work and how I can use them to make my life easier.
                        I took a couple more classes in high school which covered more advanced topics like SQL and PHP.
                        Ever since I took those classes I have wanted to further my knowledge in web development.
                        Fast forward to 2023, I decided to take the leap and enroll in a coding bootcamp to further my knowledge in web development.
                        I finished a coding bootcamp through the University of Oregon in spring of 2024 and I am currently looking for a job in web development.
                        The following is a list of skills I have learned so far in my web development journey: HTML, CSS, Javascript, Git, React, Vue, jQuery, Node.js, Express.js, SQL, MSSQL, MongoDB, Mongoose, GraphQL, .NET 4, .NET 6, Bootstrap, Tailwind CSS, Azure App Services, Azure SQL Database, Azure Blob Storage.
                    </figcaption>
                </figure>
            </div>
        </section>
    );
  }
  
  export default AboutMe;