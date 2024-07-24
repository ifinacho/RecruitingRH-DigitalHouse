import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import ApplicantsByProfessions from '../components/Applicants/ApplicantsByProfession';

function ApplicantsFilter() {

    return (
        <div className='dashboard'>
            <Header />
            <Search />
            <ApplicantsByProfessions />
        </div>
    );
}
export default ApplicantsFilter;