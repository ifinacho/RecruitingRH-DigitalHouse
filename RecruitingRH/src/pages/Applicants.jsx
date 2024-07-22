import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import ListadoAspirantes from '../components/Applicants/Aspirantes';

function Applicants() {
    return(
        <div className='dashboard'>
        <Header/>
        <Search/>
        <ListadoAspirantes/>
        </div>
    );
}
export default Applicants;