import "./CadastroDeProduto.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState , useRef } from "react";
import fetchapi from "../../api/fetchApi";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CadastroDeProduto() {
    const fileInputRef = useRef(null);
    const [imageReq , setImageReq] = useState()
    const [ref , setRef] = useState(true)
    const [images, setImages] = useState([]);
    const [openImagens , setOpenImagens] = useState(false)
    const [concluido , setConcluindo] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true);

    const [produto , setProduto] = useState('')
    const [descrição , setDescrição] = useState('')
    const [preço , setPreço] = useState()
    const [promoção , setPromoção] = useState()
    const [preçoPromo , setPreçoPromo] = useState()
    const [sabores , setSabores] = useState()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const HandleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImageReq(files)
    
        const imagesArray = files.map((file) => {
          return URL.createObjectURL(file);
        });
    
        setImages((prevImages) => [...prevImages, ...imagesArray]);
        setIsDisabled(false)
        setOpenImagens(true)
    };

    const CadastrarProduto = async () => {
        if(descrição == '' || descrição == undefined || descrição == null) {
            setDescrição("***")
        }
    
            const dados = {
                "produto" : produto,
                "descricao": descrição,
                "imagem" : "",
                "sabores" : "",
                "valor" : "89.90"
            }
            setConcluindo(true)
            fetchapi.NovoProduto(dados , imageReq)
    
            if (fileInputRef.current) {
                fileInputRef.current.value = ''; // Limpa a seleção do arquivo
              }
    
            setProduto('')
            setDescrição('')
            setRef(true)

            setImageReq([])
            setImages([])
            setOpenImagens(false)
            setIsDisabled(true)
    
            setTimeout(() => {
                setConcluindo(false);
            }, 1500)
      }
    
    return ( 
        <div id="CadastroDeProduto">
            <h2>Novo Produto</h2>
            <form id="FormNomeDesc">
                <h3>Nome e descrição</h3>
                <label>
                    <p>Nome</p>
                    <input type="text" id="InputNomeProduct" placeholder="Creatina - tal marca - 300g" onChange={(e) => setProduto(e.target.value)}/>
                </label>

                <label>
                    <p>Descrição</p>
                    <ReactQuill 
        modules={{
          toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']                                         
          ],
        }}
        onChange={(value) => setDescrição(value)}
        formats={[
          'header', 'font', 'size',
          'bold', 'italic', 'underline', 'strike', 'blockquote',
          'list', 'bullet', 'indent',
          'link', 'image'
        ]}
      />
                </label>
            </form>

            <form id="FormFotos">
                <h2>Fotos</h2>
                <div class="file-upload">
                    <input type="file" multiple className="imageProduto" id="inputImageProduto" ref={fileInputRef} onChange={HandleImageChange} style={{ display: 'none' }}/>
                </div>

                {openImagens && (
                    <div className="imageProdutoOpen slider-container">
                        <div>
                            <Slider {...settings}>
                                    {images.map((image) => (
                                    <div>
                                        <img src={image} className="zindex" />
                                    </div>
                                ))}
                                <label htmlFor="inputImageProduto" className="upload-labelopened">
                                    <IoIosAddCircleOutline id='IoIosAddCircleOutline'/>
                                    <p>Escolha uma imagem</p> 
                                </label>
                            </Slider>
                        </div>
                    </div>
                        
                ) || (
                <div className="imageProduto">
                    <label htmlFor="inputImageProduto" className="upload-label">
                        <IoIosAddCircleOutline id='IoIosAddCircleOutline'/>
                        <p>Escolha uma imagem</p> 
                    </label>
                </div>
                )}
            </form>

            <form id="FormPreços">
                <h2>Preços</h2>
                <div>
                    <label>
                        <p>Preço</p>
                        <input type="number" placeholder="R$ 00,00"/>
                    </label>

                    <label>
                        <p>Preço Promocional</p>
                        <input type="number" placeholder="R$ 00,00"/>
                    </label>

                </div>
            </form>

            <button id="bttCadProdct" onClick={() => CadastrarProduto()}>Cadastrar Produto</button>
        </div>
    );
}

export default CadastroDeProduto;