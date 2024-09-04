import "./ItemCartOpen.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import services from "../../services/services";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function ItemCartOpen({ product }) {
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

    const { carrinho, setCarrinho } = useContext(AppContext);

    function deleteItemCart() {
        setCarrinho(carrinho.filter(item => item.id !== id));
    }

    function handleQuantityChange(e) {
        const newQuantity = Number(e.target.value);
        setCarrinho(carrinho.map(item => 
            item.id === id ? { ...item, quantidade: newQuantity } : item
        ));
    }

    return (
        <div id="ItemCartOpen">
            <div className="ImageProductCart" style={{backgroundImage: `url(${linkImage})`}} />

            <a className="TitleProductCart" href={`/product/${id.split(',')[0]}`}>{produto}({sabor})</a>

            <p className="PriceItenUnic">{services.formatarCurrency(valor)}</p>

            <input 
                type="number" 
                className="InputProductCart" 
                value={quantidade} 
                onChange={handleQuantityChange} 
                min={0}
                max={20}
            />

            <button className="DeleteProductCart" onClick={deleteItemCart}>
                <RiDeleteBin2Line />
            </button>
        </div>
    );
}

export default ItemCartOpen;
