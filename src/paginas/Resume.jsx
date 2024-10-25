import { Link } from "react-router-dom";
import { studies, experiences } from '../data/resume';
import './Resume.css'

function Resume() {
    const arrays = [...studies, ...experiences];

    return (
        <>
            <h1>Sobre mi</h1>
            <ul>
                {arrays.map(array => 
                    (  
                        <li key={array.id}>
                            <h2>{array.title}</h2>
                            <p>{array.institution}</p>
                            <p> {array.company}</p>
                            <p>{array.date}</p>
                        </li>
                    )
                )}
            </ul>
            <Link to='/'>Volver</Link>
        </>
    )
}

export default Resume

