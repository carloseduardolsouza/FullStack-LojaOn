import "./Alerta.css";
import { CgDanger } from "react-icons/cg";

function AçãoRealizada({parametro, functio}) {
    return (
        <div id="AçãoRealizadasss">
          <CgDanger className="AlertAçãoRealizadasss"/>
            <h2>{parametro}</h2>
            <button onClick={() => functio(false)} className="okAçãoRealizadasss">ok</button>
        </div>
    );
}

export default AçãoRealizada;
