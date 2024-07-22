import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Aspirantes = () => {
    const [aspirantes, setAspirantes] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/api/aspirantes')
            .then(response => response.json())
            .then(data => setAspirantes(data.data))
            .catch(error => console.error('Error:', error));
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(!refresh);
    }

    const handleDelete = (id) => {
        const newAspirantes = aspirantes.filter(aspirante => aspirante.id !== id);
        console.log(newAspirantes);
        setAspirantes(newAspirantes);
        console.log('Aspirante eliminado');
    }

    return (
        <section className='items__section'>
            <article className='items__article'>
                {aspirantes.length === 0 ? <h1>No hay aspirantes</h1> :
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DNI</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>LinkedIn</th>
                                <th>Fecha de Nacimiento</th>
                                {/* <th>Imagen</th> */}
                                <th>Profesión</th>
                                <th>Sexo</th>
                                {/* <th>Acciones</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {aspirantes.map((aspirante, index) => (
                                <tr key={index}>
                                    <td>{aspirante.id}</td>
                                    <td>{aspirante.dni}</td>
                                    <td>{aspirante.nombre}</td>
                                    <td>{aspirante.apellido}</td>
                                    <td>{aspirante.email}</td>
                                    <td>{aspirante.telefono}</td>
                                    <td><a href={aspirante.urlLinkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a></td>
                                    <td>{aspirante.fechaNacimiento}</td>
                                    {/* <td><img src={`http://localhost:3000/images/applicants/${aspirante.imagen}`} alt='Aspirante' style={{ width: '50px' }}/></td> */}
                                    <td>{aspirante.profesiones?.nombre}</td>
                                    <td>{aspirante.sexos?.nombre}</td>
                                     <td className='td__actions'>
                                        <a className='button button--primary' href={`/applicants/${aspirante.id}`}>Ver</a>
                                        {/*<button onClick={() => handleDelete(aspirante.id)}>Eliminar</button>*/}
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                {/* <button onClick={handleRefresh}>Actualizar Lista</button> */}
            </article>
        </section>
    )
}

export default Aspirantes;
