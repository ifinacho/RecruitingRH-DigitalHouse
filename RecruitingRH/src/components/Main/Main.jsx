import { Presale } from "./Presale";
import Professions from "./Professions";
import { Applicants } from "./Applicants/Applicants";
import { Footer } from "../Footer";

export function Main() {
    return (
        <>
            {/*<!--Sección contenido--> */}
            <main className="content-wrap">
                <Presale />
                <Applicants />
                <Footer />
            </main>
            {/* <!--Fin Sección contenido--> */}
        </>
    );
}
