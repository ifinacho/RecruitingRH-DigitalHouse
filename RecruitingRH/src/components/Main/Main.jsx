import { Presale } from "./Presale";
import { Footer } from "../Footer";

export function Main() {
    console.log('Main component rendered');
    return (
        <>
            {/*<!--Sección contenido--> */}
            <main className="content-wrap">
                <Presale />
                <Footer />
            </main>
            {/* <!--Fin Sección contenido--> */}
        </>
    );
}
