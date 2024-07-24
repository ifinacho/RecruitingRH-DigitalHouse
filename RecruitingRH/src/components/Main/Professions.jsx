import { useEffect, useState } from "react"
import { getAllProfessions } from "../../services/getAllProfessions"
import { Link } from "react-router-dom"


export function  Professions () {

    const [professions, setProfessionsAPI] = useState()

    useEffect(() => {
        const fetchProfessions = async () => {
            const professionsList = await getAllProfessions()
            setProfessionsAPI(professionsList)
        }
        fetchProfessions()
      }
    , [])
    
    return (
        <>
            {/*<!--Sección de profesiones--> */}
                <section className="content profesiones">
                    <h2 className="mt-3">Profesiones</h2>
                    <div className="list-group shadow-sm p-3 mb-5 rounded">
                        <h4 className="list-group-item list-group-item-action active text-center"
                            aria-current="true">
                            Listado de Profesiones
                        </h4>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col" className="text-center">Profesión</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                Array.isArray(professions) && professions.map((profession, i) => 
                                <>
                                            <tr>
                                            <td className="text-center"><Link to={`/profesiones/${profession.id}`} key={profession.nombre + i} className="text-decoration-none">{profession.nombre}</Link></td>
                                            <td className="text-center">{profession.totalApplicants}</td> 
                                            </tr>
                                </>
                                )
                            }
                            </tbody>
                        </table>

                    </div>
                </section>
            {/* <!--Fin sección profesiones--> */}
        </>
    )
}