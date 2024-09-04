import { useState , useEffect } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types"; // Corrigindo a importação para PropTypes com letra maiúscula

function Provider({ children }) {
    const [produtos , setProdutos] = useState([])
    const [sherProd , setSherProd] = useState(false)
    
    // Recupera o carrinho do localStorage ou define um array vazio
    const [carrinho, setCarrinho] = useState(() => {
        const savedCarrinho = localStorage.getItem("carrinho");
        try {
            return savedCarrinho ? JSON.parse(savedCarrinho) : [];
        } catch (error) {
            console.error("Erro ao recuperar o carrinho do localStorage", error);
            return [];
        }
    });

    // Atualiza o localStorage sempre que o estado do carrinho mudar
    useEffect(() => {
        try {
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
        } catch (error) {
            console.error("Erro ao salvar o carrinho no localStorage", error);
        }
    }, [carrinho]);

    const valores = {
        carrinho,
        setCarrinho,
        produtos,
        setProdutos,
        sherProd,
        setSherProd
    };

    return ( 
        <AppContext.Provider value={valores}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: PropTypes.any.isRequired // Corrigindo a definição de propTypes para PropTypes com letra maiúscula
};
