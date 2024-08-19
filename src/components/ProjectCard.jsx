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
        <article className="flex flex-col justify-center">
            <div className='flex flex-col justify-center m-auto'>
                <h3 className="text-center text-2xl font-bold">{ project.title }</h3>
                <ul className='flex justify-center'>
                    <li className='m-2'><a className="bg-blue-600 p-2 bg-opacity-75 rounded hover:bg-opacity-100" href={project.deployed} target="_blank">Deployed App</a></li>
                    <li className='m-2'><a className="bg-blue-600 p-2 bg-opacity-75 rounded hover:bg-opacity-100" href={project.github} target="_blank">Github</a></li>
                </ul>
            </div>
            <p className="m-auto text-base p-2 lg:w-5/6">{ project.description }</p>
            <div className="flex flex-col md:flex-row items-stretch justify-center">
                <figure className="hover:opacity-50 hover:cursor-pointer m-2">
                    <a href={project.deployed} target="_blank"><img className="lg:max-w-[30vw] border-black rounded border-2 " src={project.image} alt={project.imageAlt} /></a>
                </figure>
                {frontendList.length > 0 && <List items={frontendList} title={'Frontend Dependencies:'} />}
                {backendList.length > 0 && <List items={backendList} title={'Backend Dependencies:'} />}
                {otherList.length > 0 && <List items={otherList} title={'Technologies Used:'} />}
            </div>
        </article>
    </section>
    );
}

ProjectCard.propTypes = {
    project: ProtoTypes.object.isRequired,
};


export default ProjectCard;