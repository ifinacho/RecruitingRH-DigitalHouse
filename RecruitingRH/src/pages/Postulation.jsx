import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import { Header } from '../components/Header/Header';
import { Search } from '../components/Search';
import { Form } from '../components/Form';

function Postulation() {
  return (
    <>
      <Header />
      <Search />
      <Form />
    </>
  );
}
export default Postulation