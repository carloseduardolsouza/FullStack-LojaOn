import "./InputSherProducts.css"
import { IoSearchSharp } from "react-icons/io5";
import { useState , useContext } from "react";
import AppContext from "../../context/AppContext";
import fetchApi from "../../api/fetchApi";

function InputSherProducts() {
    const [contentSher , setContentSher] = useState('')

    const {
        setProdutos,
        setSherProd
    } = useContext(AppContext)

    const submait = async () => {
        const product = await fetchApi.getProducts(contentSher)
        setProdutos(product)
        setSherProd(true)
    }

    return ( 
        <form id="AreaInputPesquisa" onSubmit={(e) => {
            e.preventDefault()
            submait()
        }}>
            <input type="text" placeholder="O que você procura?" className="InputPesquisa" onChange={(e) => {setContentSher(e.target.value)}}/>
            <IoSearchSharp id="IoSearchSharp" />
        </form>
     );
}

export default InputSherProducts;