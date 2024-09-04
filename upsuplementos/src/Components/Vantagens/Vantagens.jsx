import "./Vantagens.css"

import { BsTruck } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Vantagens() {
    return (
        <div id="Vantagens">
            <div className="itemVantagem">
                <BsTruck className="Icon"/>
                <div className="ItemVantagens">
                    <h3>Entrega Rápida</h3>
                    <p>Entrega para toda Anápolis</p>
                </div>
            </div>

            <div className="itemVantagem">
                <RiMoneyDollarCircleLine className="Icon"/>
                <div className="ItemVantagens">
                    <h3>Descontos exclusivos</h3>
                    <p>pagamento no PIX</p>
                </div>
            </div>

            <div className="itemVantagem">
                <MdSecurity className="Icon"/>
                <div className="ItemVantagens">
                    <h3>Sua compra segura</h3>
                    <p></p>
                </div>
            </div>

            <div className="itemVantagem">
                <FaWhatsapp className="Icon"/>
                <div className="ItemVantagens">
                    <h3>Contato exclusivo</h3>
                    <p>Por WhatsApp</p>
                </div>
            </div>
        </div>
    )
}

export default Vantagens