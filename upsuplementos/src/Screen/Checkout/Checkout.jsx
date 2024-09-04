import "./Checkout.css"
import { useEffect , useState , useContext } from "react";
import AppContext from "../../context/AppContext";
import services from "../../services/services";
import PagePix from "../../Components/PagePix/PagePix"
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import { CiDeliveryTruck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import ItemCartCheckout from "../../Components/ItemCartCheckout/ItemCartCheckout";

import fetchApi from "../../api/fetchApi";

import EntregaCheckout from "../../Components/EntregaCheckout/EntregaCheckout";
import PagamentoCheckout from "../../Components/PagamentoCheckout/PagamentoCheckout";
import PagamentoCheckoutLoja from "../../Components/PagamentoCheckoutLoja/PagamentoCheckoutLoja";

function Checkout({funcao}) {
    const [loading, setLoading] = useState(true);
    const [retirarLoja , setRetirarLoja] = useState(false)

    const handleCheckboxChange = (event) => {
        setRetirarLoja(event.target.checked);
      };

    useEffect(() => {
        funcao(false)
        setTimeout(() => setLoading(false), 500);
    },[])


    const {
        carrinho,
        setCarrinho
    } = useContext(AppContext)

    // Função para calcular o subtotal
    const calcularSubtotal = () => {
        return carrinho.reduce((acc, item) => acc + (item.valor || 0) * (item.quantidade || 1), 0).toFixed(2);
    };

    const [infoUser , setInfoUser] = useState({
        email: '',
        cep: '',
        telefone: '',
        nome: '',
        sobrenome: '',
        numerocasa: '',
        complemento: ''
    })

    const [email , setEmail] = useState('')
    const [cep , setCep] = useState('')
    const [telefone , setTelefone] = useState('')
    const [nome , setNome] = useState('')
    const [sobrenome , setSobrenome] = useState('')
    const [numerocasa , setNumerocasa] = useState('')
    const [complemento , setComplemento] = useState('')

    const [cepConsult , setCepConsult] = useState({})

    const alterarInfoUser = (tipo , event) => {
        if(tipo === 'email') {
            setEmail(event.target.value)
            setInfoUser({
                email: event.target.value,
                cep: cep,
                telefone: telefone,
                nome: nome,
                sobrenome: sobrenome,
                numerocasa: numerocasa,
                complemento: complemento
            })
        }

        if(tipo === 'cep') {
            setCep(event.target.value)
            setInfoUser({
                email: email,
                cep: event.target.value,
                telefone: telefone,
                nome: nome,
                sobrenome: sobrenome,
                numerocasa: numerocasa,
                complemento: complemento
            })
        }

        if(tipo === 'telefone') {
            setTelefone(event.target.value)
            setInfoUser({
                email: email,
                cep: cep,
                telefone: event.target.value,
                nome: nome,
                sobrenome: sobrenome,
                numerocasa: numerocasa,
                complemento: complemento
            })
        }

        if(tipo === 'nome') {
            setNome(event.target.value)
            setInfoUser({
                email: email,
                cep: cep,
                telefone: telefone,
                nome: event.target.value,
                sobrenome: sobrenome,
                numerocasa: numerocasa,
                complemento: complemento
            })
        }

        if(tipo === 'sobrenome') {
            setSobrenome(event.target.value)
            setInfoUser({
                email: email,
                cep: cep,
                telefone: telefone,
                nome: nome,
                sobrenome: event.target.value,
                numerocasa: numerocasa,
                complemento: complemento
            })
        }

        if(tipo === 'numerocasa') {
            setNumerocasa(event.target.value)
            setInfoUser({
                email: email,
                cep: cep,
                telefone: telefone,
                nome: nome,
                sobrenome: sobrenome,
                numerocasa: event.target.value,
                complemento: complemento
            })
        }

        if(tipo === 'complemento') {
            setComplemento(event.target.value)
            setInfoUser({
                email: email,
                cep: cep,
                telefone: telefone,
                nome: nome,
                sobrenome: sobrenome,
                numerocasa: numerocasa,
                complemento: event.target.value
            })
        }
    }

    const validação = async (parametro) => {
        if(parametro === "dadosinicial") {
            setDadosinicial(true)
            setDadosentrega(false)
            setPagamento(false)
            setPagamentoCheckoutLoja(false)
            setPaymentPix(false)
        }
        if(parametro === "dadosentrega" && retirarLoja === false) {
            const resultadoCep = await fetchApi.ConsultaCEP(cep)
            setCepConsult(resultadoCep)
            setDadosinicial(false)
            setDadosentrega(true)
            setPagamento(false)
            setPagamentoCheckoutLoja(false)
            setPaymentPix(false)
        }
        if(parametro === "dadosentrega" && retirarLoja === true) {
            setPagamentoCheckoutLoja(true)
            setDadosinicial(false)
            setDadosentrega(false)
            setPagamento(false)
            setPaymentPix(false)
        }
        if(parametro === "pagamento") {
            setDadosinicial(false)
            setDadosentrega(false)
            setPagamento(true)
            setPagamentoCheckoutLoja(false)
            setPaymentPix(false)
        }
        if(parametro === "paymentPix") {
            setDadosinicial(false)
            setDadosentrega(false)
            setPagamento(false)
            setPagamentoCheckoutLoja(false)
            setPaymentPix(true)
        }
    }

    const [dadosinicial , setDadosinicial] = useState(true)
    const [dadosentrega , setDadosentrega] = useState(false)
    const [pagamento , setPagamento] = useState(false)
    const [pagamentoCheckoutLoja , setPagamentoCheckoutLoja] = useState(false)
    const [paymentPix , setPaymentPix] = useState(false)

    const [displayInfoPedidoMobileCart , setDisplayInfoPedidoMobileCart] = useState('none')

    const [objectPayment , setObjectPayment] = useState({
        total: calcularSubtotal()
    })

    const openInfoPedidoMobileCart = () => {
        if(displayInfoPedidoMobileCart === 'none') {
            setDisplayInfoPedidoMobileCart("block")
        } else {
            setDisplayInfoPedidoMobileCart("none")
        }
    }

    return ( 
        <div id="Checkout">
            <div id="InfoPedidoMobile">
                <div onClick={() => {openInfoPedidoMobileCart()}} style={{cursor: 'pointer'}}>
                    <p><FaRegArrowAltCircleDown /> Ver detalhes do pedido</p>
                </div>
                <p>{services.formatarCurrency(calcularSubtotal())}</p>
            </div>

            <div id="InfoPedidoMobileCart" style={{display: displayInfoPedidoMobileCart}}>
            {!loading ? (
                        carrinho.length > 0 ? (
                            carrinho.map((produto, index) => (
                                <ItemCartCheckout key={index} product={produto} />
                            ))
                        ) : (
                            <p>Seu carrinho está vazio.</p>
                        )
                        ) : (
                            <p>Carregando...</p>
                            )}
            </div>
            <div id="InfoCheckout">
                <div id="StatusBar">
                    <CiDeliveryTruck className="iconCheckout"/>
                    <div className="LinhaStatusBar"/>
                    <CiCreditCard1 className="iconCheckout"/>
                </div>

                {dadosinicial && (
                    <form id="EntregaCheckoutDados" onSubmit={(e) => {
                        e.preventDefault()
                        if(infoUser.cep.length === 8 && retirarLoja === false) {
                            validação("dadosentrega");
                        } if(retirarLoja === true) {
                            validação("dadosentrega")
                        } if( infoUser.cep.length != 8 && retirarLoja === false) {
                            window.alert("Verifique seu CEP")
                        }
                     }}>
                    <label>
                        <h2>Dados de contato</h2>
                        <input type="email" placeholder="E-mail" className="EntregaCheckoutDadosInput" value={infoUser.email} onChange={(event) => {alterarInfoUser('email' , event)}}/>
                    </label>

                    <label>
                        <h2>Entrega</h2>
                        <input type="number" required={!retirarLoja} placeholder="Digite seu CEP" className="EntregaCheckoutDadosInput" value={infoUser.cep} onChange={(event) => {alterarInfoUser('cep' , event)}}/>
                    </label>

                    <label id="labelRetirarNaLojaCheckout">
                        <label class="checkbox-container">
                            <input class="custom-checkbox" type="checkbox" checked={retirarLoja} onChange={handleCheckboxChange}/>
                            <span class="checkmark"></span>
                        </label>

                        <div>
                            <p className="Retirarnaloja">Retirar na loja</p>
                            <p className="AvUniversitariaN°1745">Av. Universitaria , N°1745</p>
                        </div>
                    </label>

                    <button id="ContinuarBtt" type="submit">Continuar</button>
                </form>
                )}
                {dadosentrega && <EntregaCheckout funcao={validação} info={infoUser} alterarInfo={alterarInfoUser} consultaCep={cepConsult}/>}
                {pagamento && <PagamentoCheckout funcao={validação} info={infoUser} consultaCep={cepConsult}/>}
                {pagamentoCheckoutLoja && <PagamentoCheckoutLoja funcao={validação} payment={objectPayment}/>}
                {paymentPix && <PagePix funcao={validação}/>}
            </div>

            <div id="CartInfoCheckout">
                {!loading ? (
                        carrinho.length > 0 ? (
                            carrinho.map((produto, index) => (
                                <ItemCartCheckout key={index} product={produto} />
                            ))
                        ) : (
                            <p>Seu carrinho está vazio.</p>
                        )
                        ) : (
                            <p>Carregando...</p>
                            )}
            <div>
                    <label className="Flex">
                        <p>Subtotal</p>
                        <p>{services.formatarCurrency(calcularSubtotal())}</p>
                    </label>

                    <label className="Flex">
                        <p>Frete</p>
                        <p>{"R$ 00,00"}</p>
                    </label>
                </div>

                <label className="Flex">
                    <h2>Total:</h2>
                    <h2>{services.formatarCurrency(calcularSubtotal())}</h2>
                </label>
            </div>
        </div>
     );
}

export default Checkout;