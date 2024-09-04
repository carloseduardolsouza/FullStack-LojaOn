import "./CartOpen.css";
import { useState, useEffect , useContext} from "react";
import AppContext from "../../context/AppContext";
import { FaShoppingCart } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import ItemCartOpen from "../ItemCartOpen/ItemCartOpen";
import fetchApi from "../../api/fetchApi"

function CartOpen({ functio }) {
    const [cep, setCep] = useState("");
    const [numberCep , setNumberCep] = useState('')
    const [selectedOption, setSelectedOption] = useState("");
    const [entrega, setEntrega] = useState({ border: "none" });
    const [loading, setLoading] = useState(true);
    const [cepConsutado , setCepConsultado] = useState({})

    const {
        carrinho,
        setCarrinho
    } = useContext(AppContext)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setEntrega({ border: event.target.value === "option2" ? "solid black 2px" : "none" });
    };

    // Simula o carregamento do carrinho
    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    // Função para calcular o subtotal
    const calcularSubtotal = () => {
        return carrinho.reduce((acc, item) => acc + (item.valor || 0) * (item.quantidade || 1), 0).toFixed(2);
    };

    return (
        <div id="CartOpen">
            <header>
                <h2>
                    <FaShoppingCart /> Minhas Compras
                </h2>
                <button onClick={() => functio(false)}>
                    <GrLinkNext />
                </button>
            </header>
            <div>
                {!loading ? (
                    <div id="AreaDestaques">
                        {carrinho.length > 0 ? (
                            carrinho.map((produto, index) => (
                                <ItemCartOpen key={index} product={produto} />
                            ))
                        ) : (
                            <p>Seu carrinho está vazio.</p>
                        )}
                    </div>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
            <p style={{ fontSize: "20px" }}>Subtotal: R$ {calcularSubtotal()}</p>
            <article>
                <div className="Opçõesdeentrega">
                    <h2>Opções de Frete</h2>
                    <div className="divSelect">
                        <input
                            type="radio"
                            className="inputradio"
                            onChange={handleOptionChange}
                            value="option1"
                            checked={selectedOption === "option1"}
                        />
                        <div>
                            <h3>Retirar na loja</h3>
                            <p>Av. Universitaria, N°1745</p>
                        </div>
                    </div>

                    {cep ? (
                        <div id="formCart" style={entrega}>
                            <input
                                type="radio"
                                id="radioselectEntrega"
                                onChange={handleOptionChange}
                                value="option2"
                                checked={selectedOption === "option2"}
                            />
                            <p>Entregas para o Bairro: {numberCep.bairro}</p>
                            <div className="formCartpt2">
                                <div>
                                    <p>Total Express - Standard</p>
                                    <p>Prazo de entrega de 10 a 40min</p>
                                    <button onClick={() => setCep("")}>
                                        Alterar Cep
                                    </button>
                                </div>
                                <p>R$ {"00,00"}</p>
                            </div>
                            <p>
                                O custo de frete inclui este produto e outros
                                adicionados ao carrinho.
                            </p>
                        </div>
                    ) : (
                        <form
                            id="formCart"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const resultado = await fetchApi.ConsultaCEP(numberCep)
                                setNumberCep(resultado)
                                setCep(true);
                            }}
                        >
                            <strong>Calcule seu frete</strong>
                            <div>
                                <input
                                    type="number"
                                    placeholder="Digite o CEP"
                                    onChange={(event) => {setNumberCep(event.target.value)}}
                                    value={numberCep}
                                />
                                <button id="calcFreteCartOpen">
                                    Calcular
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </article>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <a href="/Checkout" id="FinalCompraCart">Finalizar Compra</a>
            </div>
        </div>
    );
}

export default CartOpen;
