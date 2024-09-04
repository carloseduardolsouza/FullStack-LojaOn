import InfoProduct from "../../Components/InfoProduct/InfoProduct";
import { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import fetchApi from "../../api/fetchApi";

function LadingPageProcuct() {
    const { id } = useParams();

    const [produto , setProduto] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        fetchApi.getProductsId(id).then((response) => {
            setProduto(response[0]);
            setLoading(false);
        });
    }, []);

    return ( 
        <div>
            {!loading && <InfoProduct data={produto}/>}
        </div>
     );
}

export default LadingPageProcuct;