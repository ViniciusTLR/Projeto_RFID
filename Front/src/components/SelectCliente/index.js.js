import { useEffect, useState } from "react"
import axios from "axios"



export default function SelectCliente() {

    const [cdCliente, setcdCliente] = useState([]);

    //// Declarar a variavel para receber os registros da API
    const [selectValue, setSelectValue] = useState([0]);

    useEffect(() => {

        axios.get("http://localhost:8000/api-tabCliente")
            .then((response) => {

                //Atribuir os registros no state data
                console.log(response.data);
                setcdCliente(response.data);


            }).catch((err) => {

            })
    }, [])

   

    function selecionarConsultar() {
        return (

            <div>
                <span>Cliente: </span>
                <select value={selectValue} onChange={e => setSelectValue(e.target.value)} name="codigocliente" id="codigocliente">
                    <option value={0}>... </option>
                    {cdCliente.map(cliente => (
                        <option key={cliente.cliente} value={cliente.cliente}>{cliente.desc_cliente} - {cliente.cliente} </option>

                    ))}

                </select>
            </div>


        )

    }

    return (

        <div>

            <div>
                {selecionarConsultar()}
            </div>
        </div>

    )

}




// https://www.youtube.com/watch?v=IzQb6NHKcZQ
