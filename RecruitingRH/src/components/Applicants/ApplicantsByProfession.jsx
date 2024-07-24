import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCircleUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/applicantsByProfession.css'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../Footer';


function ApplicantsByProfessions() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/aspirantes')
            .then(response => response.json())
            .then(data => setApplicants(data.data))
            .catch(error => console.error(error))
    }, [])

    const { name } = useParams();
    const applicantsFilter = applicants.filter(applicant => applicant.profesiones.nombre == name);

    return (
        <main className="content-wrap">
            <h2>Aspirantes encontrados.</h2>
            <section className="content aspirantes">
                <article className="person-boxes">
                    {
                        applicantsFilter.length <= 0 ? <h5>Sin resultados.</h5> :
                            applicantsFilter.map((applicant, i) =>
                                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="box-avatar">
                                        <img src={applicant.imagenURL} alt="" /></div>
                                    <div className="box-bio">
                                        <h2 className="bio-name">{applicant.nombre} {applicant.apellido}</h2>
                                        <p className="bio-position">{applicant.profesiones.nombre}</p>
                                    </div>
                                    <div className="box-actions">
                                        <button>
                                            <FontAwesomeIcon icon={faStar} />
                                        </button>
                                        <button>
                                            <Link to={`/applicants/${applicant.id}`}> <FontAwesomeIcon icon={faCircleUser} /> </Link>
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
    )
}


export default ApplicantsByProfessions;