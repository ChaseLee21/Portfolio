function Projects() {
    return (
        <section>
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
                    <a href="https://shhutc18.github.io/Poke-Pedia/index.html?name=binacle">Depolyed Project</a>
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
                    <h3>Project 3</h3>
                    <p>Project Description</p>
                </article>
                <article className="Project">
                    <h3>Project 4</h3>
                    <p>Project Description</p>
                </article>
                <article className="Project">
                    <h3>Project 5</h3>
                    <p>Project Description</p>
                </article>
                <article className="Project">
                    <h3>Project 6</h3>
                    <p>Project Description</p>
                </article>
            </section>
        </section>
    );
  }
  
  export default Projects;