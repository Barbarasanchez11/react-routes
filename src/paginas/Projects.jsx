
import { Link } from "react-router-dom";
import projects from '../data/projects'
import './Projects.css'

function Projects() {
    return (
    <>
         <h1>Proyectos</h1>
         <ul>
           {projects.map(project =>(
             <li key={project.id}>
             <p>{project.name}</p>
             <img src={project.image}></img>
             <p>{project.description}</p>
             <a href={project.url}></a>
             </li>
           ))}   
         </ul>
        <Link to='/'>Volver</Link>
    </>
    )
}  

export default Projects

