import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCircleUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

export function Person({id, imagen, nombre, apellido, profesion}) {

    return (
        <>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="box-avatar">
                    <img src={`/images/${imagen}`} alt="" /></div>
                <div className="box-bio">
                    <h2 className="bio-name">{nombre} {apellido}</h2>
                    <p className="bio-position">{profesion}</p>
                </div>
                <div className="box-actions">
                    <button>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                    <button>
                        <Link to={`/applicants/${id}`}> <FontAwesomeIcon icon={faCircleUser} /> </Link>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </div>
            </div>
        </>
    )
}