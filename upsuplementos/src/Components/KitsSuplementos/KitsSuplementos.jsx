import CartProduto from "../CartProduto/CartProduto";
import "./KitsSuplementos.css"

function KitsSuplementos() {
    return ( 
        <div>
            <h1 className="TextCenter">Kits</h1>

            <div id="AreaDestaques">
                <CartProduto/>
                <CartProduto/>
                <CartProduto/>
                <CartProduto/>
            </div>

        </div>
     );
}

export default KitsSuplementos;