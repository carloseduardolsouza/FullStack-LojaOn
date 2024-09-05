import './App.css';
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import PaginaInicial from './Screen/PaginaInicial/PaginaInicial';
import Produtos from './Screen/Produtos/Produtos';
import CadastroDeProduto from './Screen/CadastroDeProduto/CadastroDeProduto';

import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom';
import EditarProduto from './Screen/EditarProduto/EditarProduto';

function App() {
  return (
    <Router>
    <div className="App">
      <div id='MenuLateral'>
        <Link id='Link' to="/"><IoHomeOutline /> Página Inicial</Link>
        <Link id='Link'><HiOutlineChartSquareBar /> Estatísticas</Link>
        <p>Administrar</p>
        <Link id='Link'><MdAttachMoney /> Vendas</Link>
        <Link id='Link' to="/produtos"><MdOutlineLocalOffer /> Produtos</Link>
        <Link id='Link'><FaRegUser /> Clientes</Link>
        <Link id='Link'><TbSquareRoundedPercentage /> Markenting</Link>

        <Link id='Link'><IoSettingsOutline /> Configurações</Link>
      </div>
    </div>

    <Routes>
      <Route path='/' element={<PaginaInicial/>}/>
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/cadastrarProduto' element={<CadastroDeProduto/>}/>
      <Route path='/editarProduto/:id' element={<EditarProduto/>}/>
    </Routes>
    </Router>
  );
}

export default App;
