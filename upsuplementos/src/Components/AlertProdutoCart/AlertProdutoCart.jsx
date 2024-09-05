import "./AlertProdutoCart.css"
import { IoCartOutline } from "react-icons/io5";
import services from "../../services/services";

function AlertProdutoCart({product , funcao}) {
    const {
        produto,
        valor,
        quantidade,
        imagem
    } = product

    const imagesemColchetes = imagem.slice(1, -1)
    const image = imagesemColchetes.split(',')

    const linkImage = `http://localhost:3311/imagens/${image[0].slice(1, -1)}`;
    return ( 
        <div id="AlertProdutoCart">
            <div>
                <strong>já adicionamos o produto no seu carrinho !</strong>
            </div>

            <div className="AreaInfoAlertProdutoCart">
                <div style={{backgroundImage: `url(${linkImage})`}} className="imageAlertProdutoCart"/>
                <div>
                    <button id="bttExitAlertProdutoCart" onClick={() => {funcao(false)}}>x</button>
                    <p>{`${produto}`}</p>
                    <p>{`${quantidade}x ${services.formatarCurrency(valor)}`}</p>
                </div>
            </div>

            <button><IoCartOutline /> Ver Carrinho</button> 
        </div>
     );
}

export default AlertProdutoCart;