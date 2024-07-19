import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import Form from '../components/Form'; // Cambiado a importación por defecto

function Postulation() {
  return (
    <div className='dashboard'>
      <Header />
      <Search />
      <Form />
    </div>
  );
}
export default Postulation;
