import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';


function Professions() {
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
            <div className='dashboard'>
                <Header />
                <Search />
                <main className="content-wrap">
                    <h3>Busca aspirantes por profesión.</h3>
                    <div className="container text-center">
                        <div className="row row-cols-3">
                            {professions.map(profession =>
                                <div className="card mb-3 me-3 shadow" style={{ width: 18 + 'rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{profession.nombre}</h5>
                                        <Link to={"/professions/" + profession.nombre} className="btn btn-primary">Ver aspirantes</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer />
                </main >
            </div >
        </>
    );
}


export default Professions;