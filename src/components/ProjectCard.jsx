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
    <section>
        <article className="flex flex-col justify-center my-6 lg:max-w-[66vw] lg:m-auto">
            <h3 className="text-start text-xl font-bold indent-5">{ project.title }</h3>
            <p className="m-auto text-base indent-5">{ project.description }</p>
            <ul className='flex'>
                <li className='m-2'><a className="bg-blue-600 p-2 bg-opacity-75 rounded hover:bg-opacity-100" href={project.deployed} target="_blank">Deployed App</a></li>
                <li className='m-2'><a className="bg-blue-600 p-2 bg-opacity-75 rounded hover:bg-opacity-100" href={project.github} target="_blank">Github</a></li>
            </ul>
            <div className="flex flex-col md:flex-row items-stretch justify-center">
                <figure className="hover:opacity-50 hover:cursor-pointer">
                    <a href={project.deployed} target="_blank"><img className="max-w-[30vw] rounded border-black border-2 m-auto" src={project.image} alt={project.imageAlt} /></a>
                </figure>
                {frontendList.length > 0 && <List items={frontendList} title={'Frontend Dependencies:'} />}
                {backendList.length > 0 && <List items={backendList} title={'Backend Dependencies:'} />}
                {otherList.length > 0 && <List items={otherList} title={'Other Technologies Used:'} />}
            </div>
        </article>
    </section>
    );
}

ProjectCard.propTypes = {
    project: ProtoTypes.object.isRequired,
};


export default ProjectCard;