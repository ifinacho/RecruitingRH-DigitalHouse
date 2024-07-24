import { faUser, faList } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/logo.png';
import '../../assets/css/Header.css';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import ListProfessions from './ListProfessions';
import { Search } from '../Search';


const showProfessions = () => {
    const element = document.querySelector(".list-professions");
    if (element.style.display == '' || element.style.display == 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}


export function Header() {

    return (
        <>
            {/* Seccion de acceso */}
            <header className="menu-wrap">
                <figure className="user">
                    <div className='user-avatar'>
                        <Link to='/'><img src={logo} alt="Logo Recursos Humanos" /></Link>
                    </div>
                    <figcaption>
                        Recursos Humanos
                    </figcaption>
                </figure>
                <nav>
                    <section className='menu'>
                        <h3>Opciones</h3>
                        <ul className=''>
                            <Link to={"/applicants"} className='text-decoration-none'>
                                <Navbar icon={faUser} title={" Aspirantes"} />
                            </Link>
                            <Link className='text-decoration-none' onClick={showProfessions}>
                                <Navbar icon={faAddressCard} title={" Profesiones"} /> {/* Corrección aquí */}
                            </Link>
                            <div className='list-professions ms-4'>
                                <ListProfessions />
                            </div>
                            <Link to={"/postulation"} className='text-decoration-none'>
                                <Navbar icon={faList} title={" Postularse"} />
                            </Link>
                        </ul>
                    </section>
                </nav>
            </header>
            {/* inicio menu mobile */}
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Opciones
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <Link to={"/applicants"} className='text-decoration-none' >
                                <Navbar icon={faUser} title={" Aspirantes"} />
                            </Link>
                            <Link to={"/professions"} className='text-decoration-none'>
                                <Navbar icon={faAddressCard} title={" Profesiones"} />
                            </Link>
                            <Link to={"/postulation"} className='text-decoration-none'>
                                <Navbar icon={faList} title={" Postularse"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <Search />
            </div>
            {/* fin menu mobile */}
        </>
    );
}
