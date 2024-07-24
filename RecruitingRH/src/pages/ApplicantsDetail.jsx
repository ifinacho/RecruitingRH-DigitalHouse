import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import DetalleAspirante from '../components/Applicants/DetalleAspirante'

function ApplicantsDetail() {
    return(
        <div className='dashboard'>
        <Header/>
        <Search/>
        <DetalleAspirante/>
        </div>
    );
}
export default ApplicantsDetail;