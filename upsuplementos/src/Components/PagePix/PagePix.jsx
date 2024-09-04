import "./PagePix.css"

import { FaRegCopy } from "react-icons/fa";

function PagePix() {
    return ( 
        <div id="PagePix">
            <div id="PagePix1">
                <h3>Aguardando Pagamento...</h3>
                <div className="FlexPagePix">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="#" />
                    <div>
                        <button id="bttFaRegCopy"><FaRegCopy /> COPIAR CÓDIGO PIX</button>
                        <p><strong>Abra o aplicativo ou Internet Banking</strong> para pagar</p>
                        <p>Na opção Pix, escolha <strong>’Ler QR Code’</strong></p>
                        <p><strong>Leia o QR Code</strong> ou, se preferir, <strong>copie o código para Pix Copia e Cola.</strong></p>
                        <p>Revise as informações e <strong>confirme o pagamento.</strong></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PagePix;