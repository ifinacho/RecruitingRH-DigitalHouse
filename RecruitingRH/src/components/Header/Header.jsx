import { faUser, faList } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/logo.png';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';

export function Header() {
    console.log('Header component rendered');
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
                                <Navbar icon={faUser} title={"Aspirantes"} />
                            </Link>
                            <Link to={"/professions"} className='text-decoration-none'>
                                <Navbar icon={faAddressCard} title={"Profesiones"} /> {/* Corrección aquí */}
                            </Link>
                            <Link to={"/postulation"} className='text-decoration-none'>
                                <Navbar icon={faList} title={"Postularse"} />
                            </Link>
                        </ul>
                    </section>
                </nav>
           </header>
        </>
    );
}
