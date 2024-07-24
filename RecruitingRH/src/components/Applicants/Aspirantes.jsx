import { useEffect, useState } from 'react';
import { Footer } from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCircleUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';


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
        <main className="content-wrap">
            <h2>Aspirantes registrados.</h2>
            <section className="content aspirantes">
                <article className="person-boxes">
                    {
                        aspirantes.length <= 0 ? <h5>Sin resultados.</h5> :
                            aspirantes.map((aspirante, i) =>
                                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="box-avatar">
                                        <img src={aspirante.imagenURL} alt="" /></div>
                                    <div className="box-bio">
                                        <h2 className="bio-name">{aspirante.nombre} {aspirante.apellido}</h2>
                                        <p className="bio-position">{aspirante.profesiones.nombre}</p>
                                    </div>
                                    <div className="box-actions">
                                        <button>
                                            <FontAwesomeIcon icon={faStar} />
                                        </button>
                                        <button>
                                            <Link to={`/applicants/${aspirante.id}`}> <FontAwesomeIcon icon={faCircleUser} /> </Link>
                                        </button>
                                        <button>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </button>
                                    </div>
                                </div>
                            )
                    }
                </article>
            </section>
            <Footer />
        </main >
        // <section className='items__section'>
        //     <article className='items__article'>
        //         {aspirantes.length === 0 ? <h1>No hay aspirantes</h1> :
        //             <table className="table table-striped">
        //                 <thead>
        //                     <tr>
        //                         <th>ID</th>
        //                         <th>DNI</th>
        //                         <th>Nombre</th>
        //                         <th>Apellido</th>
        //                         <th>Email</th>
        //                         <th>Teléfono</th>
        //                         <th>LinkedIn</th>
        //                         <th>Fecha de Nacimiento</th>
        //                         {/* <th>Imagen</th> */}
        //                         <th>Profesión</th>
        //                         <th>Sexo</th>
        //                         {/* <th>Acciones</th> */}
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {aspirantes.map((aspirante, index) => (
        //                         <tr key={index}>
        //                             <td>{aspirante.id}</td>
        //                             <td>{aspirante.dni}</td>
        //                             <td>{aspirante.nombre}</td>
        //                             <td>{aspirante.apellido}</td>
        //                             <td>{aspirante.email}</td>
        //                             <td>{aspirante.telefono}</td>
        //                             <td><a href={aspirante.urlLinkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a></td>
        //                             <td>{aspirante.fechaNacimiento}</td>
        //                             {/* <td><img src={`http://localhost:3000/images/applicants/${aspirante.imagen}`} alt='Aspirante' style={{ width: '50px' }}/></td> */}
        //                             <td>{aspirante.profesiones?.nombre}</td>
        //                             <td>{aspirante.sexos?.nombre}</td>
        //                              <td className='td__actions'>
        //                                 <a className='button button--primary' href={`/applicants/${aspirante.id}`}>Ver</a>
        //                                 {/*<button onClick={() => handleDelete(aspirante.id)}>Eliminar</button>*/}
        //                             </td> 
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         }
        //         {/* <button onClick={handleRefresh}>Actualizar Lista</button> */}
        //     </article>
        // </section>
    )
}

export default Aspirantes;
