import "./Produtos.css"
import fetchApi from "../../api/fetchApi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import ItensTableProdutos from "../../Components/ItensTableProdutos/ItensTableProdutos";

import { useEffect , useState } from "react";

function Produtos() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetchApi.getProducts().then((response) => {
            setProdutos(response);
        });
    }, []);
    return ( 
        <div id="Produtos">
            <div id="divH1Butt">
                <h1>Produtos</h1>
                <a href="/cadastrarProduto"><IoMdAddCircleOutline /> Adicionar Produto</a>
            </div>

            <div>
                <IoSearchOutline id="IoSearchOutline"/>
                <input type="text" placeholder="Buscar Produto por nome..." id="SherProduct"/>
            </div>

            <table id="tableProdutos">
                <thead>
                    <tr>
                        <th id="thProduto">Produto</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <ItensTableProdutos product={produto} />
                    ))}
                </tbody>
            </table>
        </div>
     );
}

export default Produtos;