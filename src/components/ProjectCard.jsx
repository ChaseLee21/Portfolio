import ProtoTypes from 'prop-types';
import List from './List';

function ProjectCard({ project }) {

    const frontendList = project.frontend.map((item, key) => {
     return <li key={key}>{item}</li>
    });
    const backendList = project.backend.map((item, key) => {
     return <li key={key}>{item}</li>
    });
    const otherList = project.other.map((item, key) => {
        return <li key={key}>{item}</li>
    });

  return (
    <main>
        <section className="flex flex-col justify-center my-6">
            <h3 className="text-center text-lg lg:text-2xl">
                <a className="text-center underline text-blue-600 hover:text-blue-900" href={project.deployed} target="_blank">
                    { project.title }
                </a>
            </h3>
            <p className="m-auto text-base max-w-[90%] lg:max-w-[50%] p-2 indent-5">
                { project.description }
            </p>
            <div className="flex flex-col md:flex-row items-stretch justify-center">
                <figure className="hover:opacity-50 hover:cursor-pointer">
                    <a href={project.deployed} target="_blank"><img className="max-w-[30vw] rounded border-black border-2 m-auto" src={project.image} alt={project.imageAlt} /></a>
                </figure>
                {frontendList.length > 0 && <List items={frontendList} title={'Frontend Dependencies:'} />}
                {backendList.length > 0 && <List items={backendList} title={'Backend Dependencies:'} />}
                {otherList.length > 0 && <List items={otherList} title={'Other Technologies Used:'} />}
            </div>
        </section>
    </main>
    );
}

ProjectCard.propTypes = {
    project: ProtoTypes.object.isRequired,
};


export default ProjectCard;