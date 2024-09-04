import "./MenuPortraite.css"
import { GiExitDoor } from "react-icons/gi";

function MenuPortraite({functio}) {
    return ( 
        <div id="MenuPortraite">
            <button id="BttFecharMenu" onClick={() => functio(false)}>X</button>
            <header>
                <h2><a href="/login"><GiExitDoor /> Entrar</a></h2>
            </header>
            <nav id="navigation">
                <a href="/cadastro">Cadastre-se</a>
                <a href="/login">Faça Login</a>
            </nav>
        </div>
     );
}

export default MenuPortraite;