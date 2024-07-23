import banner from "../../assets/banner.jpg"

export function Presale() {

    return (
        <>
            {/* <!--Preventa--> */}
            <div className="preventa">
                <h2>Búsqueda y reclutamiento</h2>
                <p className="text-center h5">Encuentra el talento que necesitas para tu empresa o negocio, en todos los cargos administrativos, profesionales y técnicos.</p>
                <div>
                    <img src={banner} alt="Recursos Humanos"></img> 
                </div>
            </div>
            {/* <!--Fin Preventa--> */}
        </>
    )
}