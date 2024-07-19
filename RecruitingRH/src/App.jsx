import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Header } from './components/Header/Header';
import { Search } from './components/Search';
import { Main } from './components/Main/Main'; // Asegúrate de que Main esté correctamente importado

function App() {
  return (
    <div className='dashboard'>
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App; // Agrega esta línea
