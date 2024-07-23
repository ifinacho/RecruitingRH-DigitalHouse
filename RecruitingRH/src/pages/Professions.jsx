import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import { useEffect, useState } from 'react';

function Professions() {
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
    //     console.log('professions actualizado');
    // }, [professions])

    // componente desmontado
    // useEffect(() => {
    //     return () => console.log('professions desmontado');
    // }, [])


    return (
        <div className='dashboard'>
            <Header />
            <Search />
            <main className="content-wrap">
                <h2>Busca aspirantes por profesión.</h2>
                <div className="container text-center">
                    <div className="row row-cols-3">
                        {professions.map(profession =>
                            <div className="card mb-3 me-3 shadow" style={{ width: 18 + 'rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{profession.nombre}</h5>
                                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                    <a href="#" className="btn btn-primary">Ver aspirantes</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main >
        </div >
    );
}


export default Professions;