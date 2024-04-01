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
        <section className="flex flex-col justify-center">
            <h3 className="text-center text-lg lg:text-2xl">
                <a className="text-center underline text-blue-600 hover:text-blue-900" href={project.deployed} target="_blank">
                    { project.title }
                </a>
            </h3>
            <p className="m-auto text-base max-w-[90%] lg:max-w-[50%] p-2 indent-5">
                { project.description }
            </p>
            <div className="flex flex-wrap justify-center">
                <figure className="hover:">
                    <img className="rounded border-black border-2 m-1" src={project.image} alt={project.imageAlt} />
                </figure>
                {frontendList.length > 0 && <List items={frontendList} title={'Frontend:'} />}
                {backendList.length > 0 && <List items={backendList} title={'Backend:'} />}
                {otherList.length > 0 && <List items={otherList} title={'Other Packages / Technologies:'} />}
            </div>
        </section>
    </main>
    );
}

ProjectCard.propTypes = {
    project: ProtoTypes.object.isRequired,
};


export default ProjectCard;