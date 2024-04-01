function Projects() {
    return (
        <main>
            <h2>Projects</h2>
            <section className="ProjectContainer">
                <article className="Project">
                    <h3>Boise Tuxedo Shop</h3>
                    <a href="https://www.boisetuxedoshop.com" target="_blank">Deployed Project</a>
                    <p>Github Repository: private</p>
                    <p>Boisetuxedoshop.com is a public facing website I made for my families tuxedo and suit rental business. 
                    Users can view information such as store hours, product images and descriptions, pricing for services, information about events such as prom, and more.
                    Some of the technologies used to build the application are listed below.</p>
                    <h4>Frontend:</h4>
                    <ul>
                        <li>Vue 3</li>
                        <li>Vue Router</li>
                        <li>Tailwind CSS via CLI</li>
                        <li>Google Maps API</li>
                    </ul>
                    <h4>Backend:</h4>
                    <ul>
                        <li>.NET</li>
                        <li>ASP.NET</li>
                        <li>Entity Framework Core</li>
                        <li>Azure Services</li>
                        <li>Azure Blob Storages</li>
                        <li>SQL Server</li>
                        <li>Polly</li>
                        <li>Dapper</li>
                    </ul>
                </article>
                <article className="Project">
                    <h3>Poke-Pedia</h3>
                    <a href="https://shhutc18.github.io/Poke-Pedia/">Depolyed Project</a>
                    <a href="https://github.com/shhutc18/Poke-Pedia" target="_blank">Github Repository</a>
                    <p>Poke-Pedia was the first group project I worked on with classmates in my coding bootcamp. 
                    It uses the <a href="https://pokeapi.co/" target="_blank">Pokeapi</a> to fetch all 1118 Pokemon.
                    We then used this data to create an encyclopedia that allows users to search & view Pokemon.
                    This was a really fun project for me to work on and it encapsulates a part of my coding journey that I will remember for a long time. </p>
                    <h4>Frontend:</h4>
                    <ul>
                        <li>JQuery</li>
                        <li>Tailwind CSS via CDN</li>
                        <li>Pokeapi</li>
                    </ul>
                    <h4>Backend:</h4>
                    <p>This project was early on in the coding bootcamp and there is no backend.</p>
                </article>
                <article className="Project">
                    <h3>Daily Planner</h3>
                    <a href="https://rocky-mountain-31745-6823d73c66a2.herokuapp.com/">Depolyed Project</a>
                    <a href="https://github.com/shhutc18/Daily-Planner" target="_blank">Github Repository</a>
                    <p>Daily Planner was the second group project I worked on in my coding bootcamp. 
                    We had two main goals for this project: first was to create a daily planner using the model, view, controller (MVC) design pattern, and second was to implement a user authentication system.
                    We used a handful of new technologies to achieve these goals and I learned a lot about how to structure a project in a way that is scalable and maintainable.
                    Below are some of the technologies used to build the application.</p>
                    <h4>Frontend:</h4>
                    <ul>
                        <li>Handlebars.js</li>
                        <li>Tailwind CSS via CDN</li>
                    </ul>
                    <h4>Backend:</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>Sequelize</li>
                        <li>Passport.js</li>
                        <li>Mysql</li>
                        <li>Express</li>
                        <li>Express Sessions</li>
                        <li>Express Handlebars</li>
                        <li>Dotenv</li>
                        <li>Crypto</li>
                    </ul>
                </article>
                <article className="Project">
                    <h3>Text Editor - Progressive Web Application</h3>
                    <a href="https://pwa-text-editor-x7hj.onrender.com/">Depolyed Project</a>
                    <a href="https://github.com/ChaseLee21/PWA-Text-Editor" target="_blank">Github Repository</a>
                    <p>This project was apart of my coding bootcamp at University of Oregon for web development. 
                    In this project I was given some starter code and my task was to finish the project. 
                    The code that was given to me was a text editor that was built using Code Mirror.
                    My goal was to do three things:
                    1 - Implement Webpack so a user could download on their machine through their browser. 
                    2 - Implement an indexedDB database that would store the users code between sessions.
                    3 - Implement a service worker that would cache images, scripts, and css.
                    </p>
                    <h4>Backend:</h4>
                    <ul>
                        <li>IndexedDB</li>
                        <li>Workbox Service Worker</li>
                        <li>express</li>
                    </ul>
                    <h4>Other Packages:</h4>
                    <ul>
                        <li>Webpack</li>
                    </ul>
                </article>
                <article className="Project">
                    <h3>Ecommerce Backend</h3>
                    <a href="https://github.com/ChaseLee21/Ecommerce-Backend" target="_blank">Github Repository</a>
                    <a href="https://drive.google.com/file/d/1PLICnX2UrKDw8F4uEQRnvIrsyHUJIJWK/view?pli=1" target="_blank">Demonstration Video</a>
                    <p>This project was apart of my coding bootcamp at University of Oregon for web development.
                    My task was to create a backend that could be implement into an ecommerce website using node.js, express.js, mysql, and sequelize.
                    The backend was to have the following features:
                    1 - A database with tables for products, categories, tags, and a product tag junction table.
                    2 - API routes for all CRUD operations for each table.
                    3 - A seed file that would populate the database with data.
                    4 - A demonstration video that would show the backend in action.
                    I really enjoyed this application because I have worked in ecommerce before and I was able to see how things function under the hood.
                    </p>
                    <h4>Backend:</h4>
                    <ul>
                        <li>Node</li>
                        <li>express</li>
                        <li>mysql</li>
                        <li>sequelize</li>
                        <li>dotenv</li>
                    </ul>
                </article>
                <article className="Project">
                    <h3>Social Network Backend</h3>
                    <a href="https://github.com/ChaseLee21/Social-Network-Api" target="_blank">Github Repository</a>
                    <a href="https://drive.google.com/file/d/1P5P0UGtThCpoft0UOY2Y5RlqbxU0FLaX/view" target="_blank">Demonstration Video</a>
                    <p>
                    This project was apart of my coding bootcamp at University of Oregon for web development.
                    My task was to create a backend for a social network using node.js, express.js, and mongoose.
                    The backend was to have the following features:
                    1 - A database with tables for users, thoughts, and reactions.
                    2 - API routes for all CRUD operations for each table.
                    3 - A seed file that would populate the database with data.
                    4 - A demonstration video that would show the backend in action.
                    This was the first project where I used mongoose to interact with a mongoDB database.
                    </p>
                    <h4>Backend:</h4>
                    <ul>
                        <li>Node</li>
                        <li>express</li>
                        <li>mongoose</li>
                    </ul>
                </article>
            </section>
        </main>
    );
  }
  
  export default Projects;