import "./EntregaCheckout.css"
import { IoLocationOutline } from "react-icons/io5";

function EntregaCheckout({funcao , info , alterarInfo , consultaCep}) {
    return ( 
        <div id="EntregaCheckout">
            <form onSubmit={() => {funcao("pagamento")}}>
                <div>
                    <h2>Dados para contato</h2>
                    <label>
                        <p className="PlaceCtt">Email:</p>
                        <input type="email" placeholder="email" className="inputCtt" required value={info.email} onChange={(event) => {alterarInfo('email' , event)}}/>
                    </label>

                    <label>
                        <p className="PlaceCtt">Telefone:</p>
                        <input type="number" placeholder="Telefone" className="inputCtt" required value={info.telefone} onChange={(event) => {alterarInfo('telefone' , event)}}/>
                    </label>
                </div>

                <div>
                    <h2>Entrega</h2>
                    <div id="Entregapt2Checkout">
                            <p>Entregas para o Bairro: {consultaCep.bairro}</p>
                            <div className="formCartpt2">
                                <div>
                                    <p>Total Express - Standard</p>
                                </div>
                                <p>R$ {"20,00"}</p>
                            </div>
                        </div>
                </div>

                <div>
                    <h2>Dados para entrega</h2>

                    <input type="text" placeholder="Nome" className="InputDadosEntregas" required value={info.nome} onChange={(event) => {alterarInfo('nome' , event)}}/>
                    <input type="text" placeholder="Sobrenome" className="InputDadosEntregas" required value={info.sobrenome} onChange={(event) => {alterarInfo('sobrenome' , event)}}/>

                    <div id="AreaEndereço">
                        <div className="a122">
                            <IoLocationOutline id="IoLocationOutline"/>

                            <div>
                                <p>{consultaCep.logradouro}</p>
                                <p><strong>CEP: {consultaCep.cep}</strong> - {consultaCep.bairro}</p>
                                <p>{`${consultaCep.localidade} - ${consultaCep.uf}`}</p>
                            </div>
                        </div>

                        <button id="AlterarCepCheckout" type="button" onClick={() => funcao("dadosinicial")}>Alterar</button>
                    </div>

                    <div id="AreaInputDadospt2">
                        <input type="number" placeholder="numero" className="InputDadosEntregaspt2" required value={info.numerocasa} onChange={(event) => {alterarInfo('numerocasa' , event)}}/>
                        <input type="text" placeholder="complemento" className="InputDadosEntregaspt2" required value={info.complemento} onChange={(event) => {alterarInfo('complemento' , event)}}/>
                    </div>
                </div>
                <button id="BttContinuarPagamento" type="submit">Continuar para pagamento</button>
            </form>
        </div>
     );
}

export default EntregaCheckout;