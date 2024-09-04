import Destaques from "../../Components/Destaques/Destaques";
import AppContext from "../../context/AppContext";
import { useState , useContext } from "react";
import Sher from "../../Components/sher/sher";

function ScreenHome() {
    const {
        sherProd
    } = useContext(AppContext)
    return ( 
        <div>
            {sherProd && <Sher/> || <Destaques/>}
            {/* <KitsSuplementos/>*/}
        </div>
     );
}

export default ScreenHome;