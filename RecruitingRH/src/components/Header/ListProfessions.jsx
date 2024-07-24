import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListProfessions() {
    const [professions, setProfessions] = useState([]);

    // componente montado
    useEffect(() => {
        fetch('http://localhost:3000/api/profesiones')
            .then(response => response.json())
            .then(data => setProfessions(data.data))
            .catch(error => console.error(error))
    }, [])


    return (
        <>
            {
                professions.map((profession, i) =>
                    <li className='list-professions' key={profession.nombre + i}>
                        <Link to={"/professions/" + profession.nombre}>{profession.nombre}</Link>
                    </li>
                )
            }
        </>
    )
}


export default ListProfessions;