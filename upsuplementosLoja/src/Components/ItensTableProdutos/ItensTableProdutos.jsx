import "./ItensTableProdutos.css"
import { MdDeleteOutline } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import services from "../../services/services"

function ItensTableProdutos({product}) {
    const {
        id,
        produto,
        valor,
        imagem
    } = product

    const imagesemColchetes = imagem.slice(1, -1);
    const image = imagesemColchetes.split(",");
    const linkImage = `http://localhost:3311/imagens/${image[0].slice(1, -1)}`;

    const linkEdit = `/editarProduto/${id}`

    return ( 
        <tr className="ItensTableProdutos">
            <td className="tdImageProduct">
                <div style={{backgroundImage: `url(${linkImage})`}}
                className="ImgItensTableProdutos"/>
                <p>{produto}</p>
            </td>

            <td>{services.formatarCurrency(valor)}</td>

            <td>
                <button id="BttDelete"><MdDeleteOutline /></button>
                <a href={linkEdit} id="BttEdit"><HiOutlinePencilSquare /></a>
            </td>
        </tr>
     );
}

export default ItensTableProdutos;