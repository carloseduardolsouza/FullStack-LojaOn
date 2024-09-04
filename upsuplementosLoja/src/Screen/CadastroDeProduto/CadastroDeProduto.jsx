import "./CadastroDeProduto.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import PhotoUpload from "../../Components/PhotoUpload/PhotoUpload";

function CadastroDeProduto() {
    return ( 
        <div id="CadastroDeProduto">
            <h2>Novo Produto</h2>
            <form id="FormNomeDesc">
                <h3>Nome e descrição</h3>
                <label>
                    <p>Nome</p>
                    <input type="text" id="InputNomeProduct" placeholder="Creatina - tal marca - 300g"/>
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
                <PhotoUpload/>
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

            <button id="bttCadProdct">Cadastrar Produto</button>
        </div>
    );
}

export default CadastroDeProduto;