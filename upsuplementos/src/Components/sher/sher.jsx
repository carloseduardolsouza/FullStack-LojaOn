import { useState, useEffect, useContext } from "react";
import "./sher.css";
import CartProduto from "../CartProduto/CartProduto";
import AppContext from "../../context/AppContext";
import fetchApi from "../../api/fetchApi";

function Sher() {
    const [loading, setLoading] = useState(true);
    const { produtos, setProdutos } = useContext(AppContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchApi.getProducts();
                setProdutos(response);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [setProdutos]);

    return ( 
        <div>
            {!loading && (
                <div id="AreaDestaques">
                    {produtos.map((produto) => (
                        <CartProduto key={produto.id} product={produto} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Sher;
