import "./Login.css"

function Login() {
    return ( 
        <div id="Login">
            <h1>Login</h1>
            <form className="FormularioCadastro">
                <label>
                    <p>E-mail</p>
                    <input type="E-mail" className="InputCadastro"/>
                </label>

                <label>
                    <p>Senha:</p>
                    <input type="password" className="InputCadastro" />
                </label>

            <button id="CadBtt">Fazer Login</button>
            </form>

            <a href="/cadastro" className="possueconta">Não possue conta? Cadastrar-se</a>
        </div>
     );
}

export default Login;