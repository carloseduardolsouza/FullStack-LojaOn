import "./PagamentoCheckoutLoja.css"
import { useState } from "react";
import services from "../../services/services";

import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { PiPixLogo } from "react-icons/pi";

import { CiDeliveryTruck } from "react-icons/ci";

function PagamentoCheckoutLoja({funcao , payment}) {
    const {
        total
    } = payment

    const [itemFormPaymentCard , setItemFormPaymentCard] = useState("ItemFormPaymentCardOff")
    const [itemFormPaymentPix , setItemFormPaymentPix] = useState("ItemFormPaymentPixOff")

    const [rotatePix , setRotatePix] = useState("0deg")
    const [rotateCard , setRotateCard] = useState("0deg")

    const [styleInfoCard , setStyleInfoCard] = useState("none")
    const [styleInfoPix , setStyleInfoPix] = useState("none")

    const openPayment = (p) => {
        if(p === "card") {
            if(itemFormPaymentCard === "ItemFormPaymentCardOn") {
                setItemFormPaymentCard("ItemFormPaymentCardOff")
                setStyleInfoCard('none')
                setRotateCard("0deg")
            } else {
                setItemFormPaymentCard("ItemFormPaymentCardOn")
                setStyleInfoCard('block')
                setRotateCard("90deg")

                setItemFormPaymentPix("ItemFormPaymentPixOff")
                setStyleInfoPix('none')
                setRotatePix("0deg")
            }
        }

        if(p === "pix") {
            if(itemFormPaymentPix === "ItemFormPaymentPixOn") {
                setItemFormPaymentPix("ItemFormPaymentPixOff")
                setStyleInfoPix('none')
                setRotatePix("0deg")
            } else {
                setItemFormPaymentPix("ItemFormPaymentPixOn")
                setStyleInfoPix('block')
                setRotatePix("90deg")

                setItemFormPaymentCard("ItemFormPaymentCardOff")
                setStyleInfoCard('none')
                setRotateCard("0deg")
            }
        }
    }
    return ( 
        <div id="PagamentoCheckout">
            <div className="InfoPagamento">
            <IoIosInformationCircleOutline id="IoIosInformationCircleOutline"/>
                <p>Antes de finalizar a compra, valide se os dados do seu endereço estão corretos e em caso de compras parceladas, valide se a quantidade de parcelas foram selecionadas corretamente!</p>
            </div>

            <div id="ConfirmInfoPagamento">
                <label>
                    <div>
                        <CiDeliveryTruck className="IconConfirmInfoPagamento"/>
                        <p>{"R$00,00 · Retirar na Loja - Av. Universitária"}</p>
                    </div>
                    <button onClick={() => {funcao("dadosinicial")}}>Alterar</button>
                </label>
            </div>

            <div>
                <h2>Formas de Pagamento</h2>

                <div id="ItemFormPaymentCard" >
                    <div >
                        <div className="itemFormPaymentCardHeader">
                            <FaRegCreditCard />
                            <p>Cartão de Credito</p>
                        </div>
                        <IoIosArrowForward  id="IoIosArrowForward" onClick={() => openPayment("card")} style={{transform: `rotate(${rotateCard})`}}/>
                    </div>

                    <div style={{display: styleInfoCard}}>
                        <input type="number" placeholder="Numero do cartão" className="NumCartão"/>
                        <div id="flexCart">
                            <input type="text" placeholder="Nome Impresso no cartão" className="NomeCartão"/>
                            <input type="number" placeholder="(MM/AA)" className="ValidadeCartão"/>
                            <input type="number" placeholder="CVV" className="CvvCartão"/>
                        </div>
                        <select id="SelectParcelas">
                            <option value="">1x de {services.formatarCurrency(total/1)}</option>
                            <option value="">2x de {services.formatarCurrency(total/2)}</option>
                            <option value="">3x de {services.formatarCurrency(total/3)}</option>
                        </select>
                    </div>
                </div>
                        <div id="ItemFormPaymentCard" >
                    <div >
                        <div className="itemFormPaymentCardHeader">
                            <PiPixLogo />
                            <p>Pix</p>
                        </div>
                        <IoIosArrowForward  id="IoIosArrowForward" onClick={() => openPayment("pix")} style={{transform: `rotate(${rotatePix})`}}/>
                    </div>

                    <div style={{display: styleInfoPix}}>
                        <p id="mesagePixCheckout">Ao gerar o Código Pix do pedido você pode pagar escaneando o <strong>QR Code</strong> ou <strong>Copiar e Colar.</strong></p>
                    </div>
                </div>
            </div>

            <div className="divFazerPedidoCheckoutPagamento">
                <button id="FazerPedidoCheckoutPagamento" onClick={() => funcao('paymentPix')}>Reservar Pedido</button>
            </div>
        </div>
     );
}

export default PagamentoCheckoutLoja;