import "./Footer.css"
import LogoUp from "../../Assets/LogoUp.png"
import Amex from "../../Assets/Formas de pagamento/amex@2x.png"
import Bradesco from "../../Assets/Formas de pagamento/bradesco@2x.png"
import Elo from "../../Assets/Formas de pagamento/elo@2x.png"
import HiperCard from "../../Assets/Formas de pagamento/hipercard@2x.png"
import MasterCard from "../../Assets/Formas de pagamento/mastercard@2x.png"
import Visa from "../../Assets/Formas de pagamento/visa@2x.png"
import Pix from "../../Assets/Formas de pagamento/pix@2x.png"


import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

function Footer() {
    return (
        <div id="Footer">
            <div id="NewSleeter">
                <div>
                    <img src={LogoUp} alt="Logo up" className="imgLogo"/>
                </div>
                <div className="areaRedesSociaisFooter">
                    <FaInstagram />
                    <FaTiktok />
                    <FaFacebookF/>
                </div>
                <div className="NewSleter1">
                    <div>
                        <h3>Receba todas as promoções</h3>
                        <p>Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</p>
                    </div>
                    <div className="AreaInputNeww"> 
                        <input type="text" placeholder="Nome Completo"/>
                        <input type="email" placeholder="Email"/>
                        <button>OK</button>
                    </div>
                </div>
            </div>

            <div id="Suporte">
                <div>
                    <a href="#">Politica de Provacidade</a> <br />
                    <a href="#">Frete Gratis e Brinde</a> <br />
                    <a href="#">Trocas e devoluções</a> <br />
                    <a href="#">Como rastrear meu pedido</a> <br />
                    <a href="#">Pagamentos e envios</a> <br />
                    <a href="#">Quem somos ?</a> <br />
                </div>
                <div>
                    <h2>Entre em contato</h2>
                    <p><SlEarphonesAlt /> +99 (99) 9 9999 9999</p>
                    <p><MdOutlineMail /> carlos@carlos.com</p>
                    <p><CiClock2 /> Segunda a Sexta 9:00hrs as 19:30hrs</p>
                </div>
            </div>

            <div id="PagamentoEnvio">
                <div>
                    <h2>Formas de Pagamentos</h2>
                    <div id="FormPagamento">
                        <img src={Amex} alt="Amex" className="ImgPagamento"/>
                        <img src={Bradesco} alt="Bradesco" className="ImgPagamento"/>
                        <img src={Elo} alt="Elo" className="ImgPagamento"/>
                        <img src={HiperCard} alt="hiperCard" className="ImgPagamento"/>
                        <img src={MasterCard} alt="MasterCard" className="ImgPagamento"/>
                        <img src={Visa} alt="Visa" className="ImgPagamento"/>
                        <img src={Pix} alt="Pix" className="ImgPagamento"/>
                    </div>
                </div>

                <div>
                    <h4>&copy; Todos direitos reservados </h4>
                </div>
            </div>
        </div>
    )
}

export default Footer