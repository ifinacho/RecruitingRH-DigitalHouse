import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const DetalleAspirante = () => {
    const [aspirante, setAspirante] = useState({});
    const [refresh, setRefresh] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/aspirantes/${id}`)
            .then(response => response.json())
            .then(data => setAspirante(data.data))
            .catch(error => console.error('Error:', error));
    }, [refresh]);

    return (
        <div className='card'>
            <article className='aspirante__article'>
                <h1 className="card-title">{aspirante.nombre} {aspirante.apellido}</h1>
                <img className="card-img-top" src={aspirante.imagenURL} alt='Aspirante' style={{ width: 20 + "rem" ,borderRadius: "100%"}} />
                <div className="card-body">
                    <p className="card-text"><b>DNI:</b> {aspirante.dni}</p >
                    <p className="card-text"><b>Email:</b> {aspirante.email}</p >
                    <p className="card-text"><b>Teléfono:</b> {aspirante.telefono}</p >
                    <p className="card-text"><b>LinkedIn:</b> <a href={aspirante.urlLinkedin} target='_blank' rel='noopener noreferrer'>Perfil</a></p >
                    <p className="card-text"><b>Fecha de Nacimiento:</b> {aspirante.fechaNacimiento}</p >
                    <p className="card-text"><b>Profesión:</b> {aspirante.profesiones?.nombre}</p >
                    <p className="card-text"><b>Sexo:</b> {aspirante.sexos?.nombre}</p >
                    <a className='btn btn-primary' href={`/applicants`}>Volver</a>
                </div>
            </article>
        </div>
    )
}

export default DetalleAspirante;
