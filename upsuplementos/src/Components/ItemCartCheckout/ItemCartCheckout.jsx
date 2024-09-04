import "./ItemCartCheckout.css"
import services from "../../services/services";

function ItemCartCheckout({product}) {
    const {
        id,
        produto,
        valor,
        quantidade,
        imagem,
        sabor
    } = product;

    const imagesemColchetes = imagem.slice(1, -1)
    const image = imagesemColchetes.split(',')

    const linkImage = `http://localhost:3311/imagens/${image[0]}`;
    return ( 
        <div id="ItemCartCheckout">
            <div style={{backgroundImage: `url(${linkImage})`}} className="ImgItemCartCheckout"/>
            <p className="NameProductItemCartCheckout">{produto + `  (x${quantidade})` + ` ${sabor}`}</p>
            <p>{services.formatarCurrency(valor)}</p>
        </div>
     );
}

export default ItemCartCheckout;