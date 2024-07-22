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

    // componente actualizado
    // useEffect(() => {
    // console.log('professions actualizado');
    // }, [professions])

    // componente desmontado
    // useEffect(() => {
    // return () => console.log('professions desmontado');
    // }, [])


    return (
        <>
            {
                professions.map(profession =>
                    <li className='list-professions'>
                        <Link to={"#"}>{profession.nombre}</Link>
                    </li>
                )
            }
        </>
    )
}


export default ListProfessions;