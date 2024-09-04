import "./App.css";
import "./fonts/fonts.css";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Checkout from "./Screen/Checkout/Checkout";
import ScreenHome from "./Screen/ScreenHome/ScreenHome";
import Footer from "./Components/Footer/Footer";
import LadingPageProcuct from "./Screen/LadingPageProcuct/LadingPageProcuct";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import Provider from "./context/provider";
import LogoUP from "./Assets/LogoUp.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categorias from "./Components/Categorias/Categorias";
import Cadastro from "./Screen/Cadastro/Cadastro";
import Login from "./Screen/Login/Login";
import CartOpen from "./Components/CartOpen/CartOpen";
import MenuPortraite from "./Components/MenuPortraite/MenuPortraite"
import InputSherProducts from "./Components/InputSherProducts/InputSherProducts";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [menuPortraite , setMenuPortraite] = useState(false)
  const [finalizarCompra , setFinalizarCompra] = useState(true)

  const [sherProduto , setSherProduto] = useState('')

  useEffect(() => {
    const savedCart = localStorage.getItem("carrinho");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [cart]);

  return (
    <Provider>
      <Router>
        {menuPortraite && <MenuPortraite functio={setMenuPortraite}/>}
        <a id="bttWpp" href="https://wa.me/62993974338" target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp id="IoLogoWhatsapp" />
        </a>
        {cartOpen && <CartOpen functio={setCartOpen} compra={setFinalizarCompra}/>}
        {finalizarCompra && (
          <div>
            <div id="header">
          <TiThMenu id="TiThMenu" onClick={() => setMenuPortraite(true)}/>

          <div id="AreaLogoUp">
            <a href="/"><img src={LogoUP} alt="Logo Up" className="LogoUp" /></a>
          </div>


          <InputSherProducts/>

          <div className="NavRight">
            <div className="Cadastrar-se">
              <FaRegUserCircle id="FaRegUserCircle" />
              <a href="/cadastro">Cadastrar-se</a>
            </div>
            <div className="linhaVertical" />
            <div>
              <a href="/login">Fazer Login</a>
            </div>
            <div>
              <div id="Notification">
                {cart.length}
              </div>

                  
                <FaShoppingCart id="FaShoppingCart" onClick={() => setCartOpen(true)} />
            </div>
          </div>
        </div>
          <Categorias/>
          </div>
        ) || (
          <div id="header2">
            <a href="/"><img src={LogoUP} alt="Logo Up Suplementos" className="LogoUp"/></a>
          </div>
        )}
        

        <Routes>
          <Route path="/" element={<ScreenHome />} />
          <Route path="/product/:id" element={<LadingPageProcuct />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout funcao={setFinalizarCompra}/>}/>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
