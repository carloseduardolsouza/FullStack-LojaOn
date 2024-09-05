import "./CartProduto.css";
import { FaPix, FaRegCreditCard } from "react-icons/fa6";
import services from "../../services/services";
import AppContext from "../../context/AppContext";
import { useContext, useState, useEffect } from "react";
import Alerta from "../Alerta/Alerta";
import AlertProdutoCart from "../AlertProdutoCart/AlertProdutoCart";

function CartProduto({ product }) {
    const { id, produto, valor, imagem, sabores , promocao } = product;

    const [sabor, setSabor] = useState([]);
    const [className, setClassName] = useState("CartProduto");
    const [saborSelect, setSaborSelect] = useState("Selecione um sabor");
    const [alerta, setAlerta] = useState(false);
    const [alertProdutoCart, setAlertProdutoCart] = useState(false);
    const [stage, setStage] = useState(0);

    const imagesemColchetes = imagem.slice(1, -1);
    const image = imagesemColchetes.split(",");
    const linkImage = `http://localhost:3311/imagens/${image[0].slice(1, -1)}`;

    const [objeto, setObjeto] = useState({
        id: id + "," + saborSelect,
        imagem: imagem,
        produto: produto,
        valor: valor,
        quantidade: 1,
        sabor: saborSelect,
    });

    const { carrinho, setCarrinho } = useContext(AppContext);

    useEffect(() => {
        if (sabores) {
            const saboresColchetes = sabores.slice(1, -1);
            setSabor(saboresColchetes.split(","));
        }
    }, [sabores]);

    const valorPor3 = valor / 3;

    const valorPixfunction = () => {
        const desconto = 0.05 * valor;
        return (valor - desconto).toFixed(2);
    };

    const addToCart = () => {
        if (saborSelect === "Selecione um sabor" && sabores) {
            setAlerta(true);
            return;
        }

        const existingProduct = carrinho.find((item) => item.id === objeto.id);

        if (existingProduct) {
            const updatedCart = carrinho.map((item) =>
                item.id === objeto.id ? { ...item, quantidade: item.quantidade += 1 } : item
            );
            setCarrinho(updatedCart);
        } else {
            setCarrinho([...carrinho, objeto]);
        }

        setAlertProdutoCart(true);
        setTimeout(() => {
            setAlertProdutoCart(false);
        }, 3000);
    };

    const PassaStage = () => {
        if (sabores) {
            setStage(1);
            setClassName("CartProdutoEstatic");
        } else {
            addToCart();
        }
    };

    return (
        <div id={className}>
            {alertProdutoCart && <AlertProdutoCart product={objeto} funcao={setAlertProdutoCart} />}
            {alerta && <Alerta parametro={"Selecione um Sabor"} functio={() => setAlerta(false)} />}
            {stage === 0 ? (
                <div>
                    {promocao === 1 &&
                        <div id="Promo">
                            <p>30%</p>
                            <p>OFF</p>
                        </div>
                    }
                    <a href={`/product/${id}`}>
                        <div
                            className="ImgProduct"
                            style={{
                                backgroundImage: `url(${linkImage})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        />
                        <h4 className="TitleItem">{produto}</h4>
                        <div className="InfoProductPrice">
                            <h4 className="PriceTotProduto">{services.formatarCurrency(valor)}</h4>
                            <p>
                                <strong>
                                    <FaPix /> {services.formatarCurrency(valorPixfunction())}
                                </strong>{" "}
                                no Pix
                            </p>
                            <p>
                                <strong>
                                    <FaRegCreditCard />
                                </strong>{" "}
                                3x de {services.formatarCurrency(valorPor3.toFixed(2))} sem juros
                            </p>
                        </div>
                    </a>
                    <button id="BttComprar" onClick={PassaStage}>
                        Comprar
                    </button>
                </div>
            ) : (
                <div>
                    {promocao === 1 &&
                        <div id="Promo">
                            <p>30%</p>
                            <p>OFF</p>
                        </div>
                    }
                    <div>
                        <div
                            className="ImgProduct"
                            style={{
                                backgroundImage: `url(${linkImage})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        />
                        <h4 className="TitleItem">{produto}</h4>

                        <select
                            className="SelectProductSabor"
                            onChange={(e) => {
                                setSaborSelect(e.target.value);
                                setObjeto({
                                    ...objeto,
                                    id: id + "," + e.target.value,
                                    sabor: e.target.value,
                                });
                            }}
                            value={saborSelect}
                        >
                            <option value="Selecione um sabor">Selecione um sabor</option>
                            {sabor.map((sabor) => (
                                <option key={sabor} value={sabor}>
                                    {sabor}
                                </option>
                            ))}
                        </select>

                        <div className="InfoProductPrice">
                            <h4 className="PriceTotProduto">{services.formatarCurrency(valor)}</h4>
                            <p>
                                <strong>
                                    <FaPix /> {services.formatarCurrency(valorPixfunction())}
                                </strong>{" "}
                                no Pix
                            </p>
                            <p>
                                <strong>
                                    <FaRegCreditCard />
                                </strong>{" "}
                                3x de {services.formatarCurrency(valorPor3.toFixed(2))} sem juros
                            </p>
                        </div>
                    </div>
                    <button id="BttComprar" onClick={() => {setStage(0); setClassName("CartProduto");}}>
                        Fechar
                    </button>
                    <button id="BttComprar" onClick={addToCart}>
                        Comprar
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartProduto;
