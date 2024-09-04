import CartProduto from "../CartProduto/CartProduto";
import AppContext from "../../context/AppContext";
import Vantagens from "../../Components/Vantagens/Vantagens";
import fetchApi from "../../api/fetchApi";
import { useState, useEffect , useContext } from "react";
import Banner from "../Banner/Banner";
import "./Destaques.css";

function Destaques() {
    const [loading, setLoading] = useState(true);

    const {
        produtos,
        setProdutos
    } = useContext(AppContext)

    useEffect(() => {
        fetchApi.getProducts().then((response) => {
            setProdutos(response);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <Banner/>
            <Vantagens/>
            <h1 className="TextCenter">Destaques</h1>
            {!loading && (
                <div id="AreaDestaques">
                    {produtos.map((produto) => (
                        <CartProduto product={produto} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Destaques;
