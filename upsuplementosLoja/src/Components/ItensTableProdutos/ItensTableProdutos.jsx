import "./ItensTableProdutos.css"
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import services from "../../services/services"

function ItensTableProdutos({product}) {
    const {
        produto,
        valor
    } = product
    return ( 
        <tr className="ItensTableProdutos">
            <td>
                <div/>
                <p>{produto}</p>
            </td>

            <td>{services.formatarCurrency(valor)}</td>

            <td>
                <button id="BttDelete"><MdDeleteOutline /></button>
                <button id="BttEdit"><HiOutlinePencilSquare /></button>
            </td>
        </tr>
     );
}

export default ItensTableProdutos;