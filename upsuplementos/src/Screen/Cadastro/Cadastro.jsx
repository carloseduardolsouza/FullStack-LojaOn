import "./Cadastro.css"

function Cadastro() {
    return ( 
        <div id="Cadastro">
            <h1>Cadastrar-se</h1>
            <form className="FormularioCadastro">
                <label>
                    <p>Nome Completo</p>
                    <input type="text" className="InputCadastro"/>
                </label>

                <label>
                    <p>Telefone:</p>
                    <input type="Number" className="InputCadastro" />
                </label>

                <label>
                    <p>E-mail:</p>
                    <input type="email" className="InputCadastro" />
                </label>

                <label>
                    <p>Senha: </p>
                    <input type="password" className="InputCadastro"/>
                </label>

                <label>
                    <p>Confirmar senha: </p>
                    <input type="password" className="InputCadastro"/>
                </label>

            <button id="CadBtt">CADASTRAR-SE</button>
            </form>

            <a href="/login" className="possueconta">Já Possue Conta? fazer Login</a>
        </div>
     );
}

export default Cadastro;