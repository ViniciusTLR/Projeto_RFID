import { useEffect, useState } from "react"
import axios from "axios"


export default function SelectFilialCliente() {

    const[cdFilialCliente, setcdFilialCliente] = useState([]);

    useEffect(() =>{
        
        axios.get("http://localhost:8000/api-tabFilialCliente")
        .then((response) => {

            //Atribuir os registros no state data
            console.log(response.data);
            setcdFilialCliente(response.data);
            
            
        }).catch((err) => {

        })
    },[])

    return (

        <div>
            <select name="codigoFilialcliente" id="codigoFilialcliente">
                <option value={""}>....</option>
                {cdFilialCliente.map(codigo_filial_cliente => (
                    <option key={codigo_filial_cliente.codigo_filial_cliente} value={codigo_filial_cliente.id}>{codigo_filial_cliente.descicao_filial_cliente}</option>
                ))}
            </select>
        </div>

    )
}

// https://www.youtube.com/watch?v=IzQb6NHKcZQ 