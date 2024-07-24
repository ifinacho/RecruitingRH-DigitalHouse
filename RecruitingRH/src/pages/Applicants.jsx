import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import Aspirantes from '../components/Applicants/Aspirantes'
import { Footer } from '../components/Footer';

function Applicants() {
    return (
        <div className='dashboard'>
            <Header />
            <Search />
            {/*<!-- Aspirantes -->*/}
            {/* <main className='content-wrap'> */}
            <Aspirantes />
            {/* <Footer/>
        </main> */}
        </div>
    );
}
export default Applicants;