import ProjectCard from './ProjectCard';

function Projects() {

    const projects = [
        {
            title: "Boise Tuxedo Shop",
            description: "Boisetuxedoshop.com is a public facing website I made for my families tuxedo and suit rental business. Users can view information such as store hours, product images and descriptions, pricing for services, information about events such as prom, and more. Some of the technologies used to build the application are listed below.",
            frontend: ["Vue 3", "Vue Router", "Tailwind CSS via CLI", "Google Maps API"],
            backend: [".NET", "ASP.NET", "Entity Framework Core", "Azure Services", "Azure Blob Storages", "SQL Server", "Polly", "Dapper"],
            other: [],
            image: "https://via.placeholder.com/300",
            deployed: "https://www.boisetuxedoshop.com",
            github: ""
        },
        {
            title: "Poke-Pedia",
            description: "Poke-Pedia was the first group project I worked on with classmates in my coding bootcamp. It uses the <a href='https://pokeapi.co/' target='_blank'>Pokeapi</a> to fetch all 1118 Pokemon. We then used this data to create an encyclopedia that allows users to search & view Pokemon. This was a really fun project for me to work on and it encapsulates a part of my coding journey that I will remember for a long time.",
            frontend: ["JQuery", "Tailwind CSS via CDN"],
            backend: ["Pokeapi"],
            other: [],
            image: "https://via.placeholder.com/300",
            deployed: "https://github.com/shhutc18/Poke-Pedia",
            github: "https://shhutc18.github.io/Poke-Pedia/"
        },
        {
            title: "Daily Planner",
            description: "Daily Planner was the second group project I worked on in my coding bootcamp. We had two main goals for this project: first was to create a daily planner using the model, view, controller (MVC) design pattern, and second was to implement a user authentication system. We used a handful of new technologies to achieve these goals and I learned a lot about how to structure a project in a way that is scalable and maintainable. Below are some of the technologies used to build the application.",
            frontend: ["Handlebars.js", "Tailwind CSS via CDN"],
            backend: ["Node.js", "Express", "Sequelize", "Passport.js", "Mysql", "Express Sessions", "Express Handlebars", "Dotenv", "Crypto"],
            other: [],
            image: "https://via.placeholder.com/300",
            deployed: "https://rocky-mountain-31745-6823d73c66a2.herokuapp.com/",
            github: "https://github.com/shhutc18/Daily-Planner"
        },
        {
            title: "Text Editor - Progressive Web Application",
            description: `This project was apart of my coding bootcamp at University of Oregon for web development. In this project I was given some starter code and my task was to finish the project. The code that was given to me was a text editor that was built using Code Mirror. 
            My goal was to do three things:
            One, implement Webpack so a user could download on their machine through their browser. 
            Two, implement an indexedDB database that would store the users code between sessions.
            Three, implement a service worker that would cache images, scripts, and css.`,
            frontend: ["Code Mirror"],
            backend: ["IndexedDB", "Workbox Service Worker", "Express"],
            other: ["express"],
            image: "https://via.placeholder.com/300",
            deployed: "https://pwa-text-editor-x7hj.onrender.com/",
            github: "https://github.com/ChaseLee21/PWA-Text-Editor"
        },
        {
            title: "Ecommerce Backend",
            description: `This project was apart of my coding bootcamp at University of Oregon for web development.
            My task was to create a backend that could be implement into an ecommerce website using node.js, express.js, mysql, and sequelize.
            The backend was to have the following features:
            One, a database with tables for products, categories, tags, and a product tag junction table.
            Two, API routes for all CRUD operations for each table.
            Three, a seed file that would populate the database with data.
            Last, a demonstration video that would show the backend in action.
            I really enjoyed this application because I have worked in ecommerce before and I was able to see how things function under the hood.`,
            frontend: [],
            backend: ["Node.js", "Mysql", "Express", "sequelize", "Dotenv"],
            other: [],
            image: "https://via.placeholder.com/300",
            deployed: "https://drive.google.com/file/d/1PLICnX2UrKDw8F4uEQRnvIrsyHUJIJWK/view?pli=1",
            github: "https://github.com/ChaseLee21/Ecommerce-Backend"
        },
        {
            title: "Social Network Backend",
            description: `This project was apart of my coding bootcamp at University of Oregon for web development.
            My task was to create a backend for a social network using node.js, express.js, and mongoose.
            The backend was to have the following features:
            One, a database with tables for users, thoughts, and reactions.
            Two, API routes for all CRUD operations for each table.
            Three, a seed file that would populate the database with data.
            Last, a demonstration video that would show the backend in action.
            This was the first project where I used mongoose to interact with a mongoDB database.`,
            frontend: [],
            backend: ["Node.js", "Mongoose", "Express", "MongoDB"],
            other: [],
            image: "https://via.placeholder.com/300",
            deployed: "https://drive.google.com/file/d/1P5P0UGtThCpoft0UOY2Y5RlqbxU0FLaX/view",
            github: "https://github.com/ChaseLee21/Social-Network-Api"
        },
    ];


    return (
        <main>
            <main className="bg-white rounded m-2 p-2 lg:m-4 xl:m-8">
                <h1 className='text-xl md:text-2xl xl:text-4xl text-center font-bold mb-2'>Portfolio</h1>
                <ProjectCard project={projects[0]} />
                <ProjectCard project={projects[1]} />
                <ProjectCard project={projects[2]} />
                <ProjectCard project={projects[3]} />
                <ProjectCard project={projects[4]} />
                <ProjectCard project={projects[5]} />
            </main>
        </main>
    );
  }
  
  export default Projects;