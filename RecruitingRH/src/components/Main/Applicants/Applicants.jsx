import { Person } from "./Person";
import { useEffect, useState } from "react";
import { getAllApplicants } from "../../../services/getAllApplicants";

export function Applicants() {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        const fetchApplicants = async () => {
            try {
                const applicantsList = await getAllApplicants();
                setApplicants(applicantsList);
            } catch (error) {
                console.error("Failed to fetch applicants:", error);
            }
        }

        fetchApplicants()
    }, [])

    return (
        <>
            {/* <!--Sección aspirantes--> */}
            <section className="content aspirantes">
                <h2 className="mt-3">Aspirantes</h2>
                <article className="person-boxes">
                    {
                        Array.isArray(applicants) && applicants.map((applicant) => (
                            <Person
                                key={applicant.id}  // Mejor usar id como key
                                id={applicant.id}
                                imagen={applicant.imagen}
                                nombre={applicant.nombre}
                                apellido={applicant.apellido}
                                profesion={applicant.profesiones ? applicant.profesiones.nombre : "Sin profesión"} // Asegúrate de manejar la ausencia de profesión
                            />
                        ))
                    }
                </article>
            </section>
            {/* <!--Fin sección aspirantes--> */}
        </>
    );
}
