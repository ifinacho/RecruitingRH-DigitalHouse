import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className="container text-center">
                <div className="row row-cols-3">
                    {applicantsFilter.length <= 0 ? <h5>Sin resultados.</h5> :
                        applicantsFilter.map((applicant, i) =>
                            <div className="card card-applicant mb-3 me-3 shadow" key={applicant.id + i} style={{ width: 18 + 'rem' }}>
                                <img src={"../../../public/imgApplicants/" + applicant.imagen} className="card-img-top" alt="img not found" />
                                <div className="card-body">
                                    <h5 className="card-title">{applicant.nombre} {applicant.apellido}</h5>
                                    <p className="card-text">{applicant.profesiones.nombre}</p>
                                </div>
                                <div className="card-body">
                                    <Link to={"/applicants/" + applicant.id} className='btn btn-primary'>Ver información</Link>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <Footer />
        </main >
    )
}


export default ApplicantsByProfessions;