import "./InfoProduct.css";
import { FaRegMoneyBillAlt, FaInfoCircle } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import fetchApi from "../../api/fetchApi";
import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import services from "../../services/services";
import Alerta from "../Alerta/Alerta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function InfoProduct({ data }) {
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [numeroDeItens, setNumeroDeItens] = useState(1);
    const [sabor, setSabor] = useState([]);
    const [selectSabor, setSelectSabor] = useState("Selecione um sabor");
    const [alerta, setAlerta] = useState(false);
    const [enterFrete, setEnderFrete] = useState(false);
    const [boxStyle, setBoxStyle] = useState({ animation: '' });

    const { carrinho, setCarrinho } = useContext(AppContext);
    const { produto, valor, descricao, id, imagem, sabores } = data;

    useEffect(() => {
        if (sabores) {
            const saboresColchetes = sabores.slice(1, -1);
            setSabor(saboresColchetes.split(','));
        }
    }, [sabores]);

    const imagesemColchetes = imagem.slice(1, -1);
    const image = imagesemColchetes.split(',');

    const [objeto, setObjeto] = useState({
        id: id,
        produto: produto,
        valor: valor,
        quantidade: 1,
        imagem: imagem,
        sabor: selectSabor
    });

    const valorPor3 = valor / 3;

    const addToCart = () => {
        const existingProduct = carrinho.find(item => item.id === objeto.id);
        if (selectSabor === "Selecione um sabor" && sabores) {
            setAlerta(true);
            return;
        }
        if (existingProduct) {
            const updatedCart = carrinho.map(item =>
                item.id === objeto.id ? { ...item, quantidade: item.quantidade += 1 } : item
            );
            setCarrinho(updatedCart);
        } else {
            setCarrinho([...carrinho, objeto]);
        }
    };

    const settings = {
        customPaging: function() {
          return (
            <a>
              <img src={`http://localhost:3311/imagens/${image}`}/>
            </a>
          );
        },
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnSelect: true
      };

    return (
        <div>
            <div id="InfoProduct">
                {alerta && <Alerta parametro={"Selecione um Sabor"} functio={() => setAlerta(false)} />}
                <div className="slider-container">
                    <Slider {...settings}>
                        {image.map((img) => (
                            <div>
                                <img className="ImageProduct" src={`http://localhost:3311/imagens/${img}`}/>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div id="InformaçãoProduct">
                    <h2>{produto}</h2>
                    <h3>{services.formatarCurrency(valor)}</h3>
                    <div className="DivPagamento">
                        <p><strong><FaRegCreditCard /> 3x de {services.formatarCurrency(valorPor3.toFixed(2))} sem juros</strong></p>
                        <p><strong><FaRegMoneyBillAlt /> 5% de desconto</strong> Pagando no Pix</p>
                    </div>
                    {sabor.length > 0 && (
                        <div>
                            <select className="SelectSaborInfoProduct" onChange={(event) => {
                                setSelectSabor(event.target.value);
                                setObjeto({
                                    id: id + ',' + event.target.value,
                                    produto: produto,
                                    valor: valor,
                                    quantidade: numeroDeItens,
                                    imagem: imagem,
                                    sabor: event.target.value
                                });
                            }}>
                                <option value={'Selecione um sabor'}>Selecione um sabor</option>
                                {sabor.map((sabor, index) => (
                                    <option key={index} value={sabor}>
                                        {sabor}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="SelectComprar">
                        <input type="number" value={numeroDeItens} min={1} max={20} onChange={(event) => {
                            setNumeroDeItens(event.target.value);
                            setObjeto({
                                id: id + selectSabor,
                                produto: produto,
                                valor: valor,
                                quantidade: event.target.value,
                                imagem: imagem,
                                sabor: selectSabor
                            });
                        }} />
                        <button onClick={addToCart}>Comprar</button>
                    </div>

                    <div id="InformaçãoFrete" style={boxStyle}>
                        <h3>Calcule seu Frete</h3>
                        <form onSubmit={async (event) => {
                            event.preventDefault();
                            setBoxStyle({ animation: 'abrirCaixa .5s', height: '250px' });
                            if (cep.length === 8) {
                                try {
                                    const json = await fetchApi.ConsultaCEP(cep);
                                    setBairro(json.bairro);
                                    setEnderFrete(true);
                                } catch (error) {
                                    window.alert("Erro ao buscar o CEP.");
                                }
                            } else {
                                window.alert("VERIFIQUE SEU CEP!!");
                            }
                        }}>
                            <input type="number"
                                value={cep}
                                required
                                placeholder="Digite o CEP"
                                onChange={(event) => {
                                    setCep(event.target.value);
                                }} />
                            <button type="submit">Calcular</button>
                        </form>
                        {enterFrete &&
                            <div id="AnimationEntrada">
                                <p id="title">Entregas para o Bairro: {bairro}</p>
                                <div className="AreaFrete">
                                    <div>
                                        <p>Total Express - Standard</p>
                                        <p>Prazo de entrega de 10 a 40min</p>
                                    </div>
                                    <div>
                                        <p id="priceFrete">R$ {'00,00'}</p>
                                    </div>
                                </div>
                                <p><FaInfoCircle id="FaInfoCircle" />O custo de frete inclui este produto e outros adicionados ao carrinho.</p>
                            </div>
                        }
                    </div>
                    <div className="Compartilhar">
                        <IoMdShareAlt className="IoMdShareAlt" />
                        <p>Compartilhar</p>
                    </div>
                </div>
            </div>

            <div id="Descrição">
                <h2>Descrição Produto</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
}

export default InfoProduct;
