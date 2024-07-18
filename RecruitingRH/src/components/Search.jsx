import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

export function Search() {
    return (
        <>
            {/* Seccion de acceso */}
            <section className='search-wrap'>
                <div className='search'>
                    <label htmlFor="search">
                    <FontAwesomeIcon icon={faSearch} className='iconSearch' />
                    <input type="text" id="search" className='ms-5'></input>
                    </label>
                </div>

                <div className='user-actions'>
                    <button>
                    <Link to={"/postulation"} className='text-decoration-none' > <FontAwesomeIcon icon={faUserPlus} className='iconSearch' /> </Link>
                    </button>
                </div>
            </section>
            {/*--Fin Seccion de acceso--*/}
        </>
    )
}