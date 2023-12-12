import { useEffect, useState } from "react";

export default function Excluir(){

    const [excluir, setExcluir] = useState(false);


        function handleClickExcluir() {
            return(
            //setConsultar(!excluir);
            alert("oi")
            )
        }

        return(
            <div>
            <button className='btnExcluir_alterar' onClick={handleClickExcluir}>Excluir</button>
            </div>
        )


}