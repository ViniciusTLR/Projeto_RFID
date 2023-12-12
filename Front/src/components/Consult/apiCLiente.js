import { useEffect, useState } from "react";
import axios from 'axios'

export default function Consult() {


    //// Declarar a variavel para receber os registrosda da API
    const [dadosBD, setdadosBD] = useState([]);

    axios.get(`http://localhost:8000/api-tabCliente`)
        .then((response) => {

            //Atribuir os registros no state data
            console.log(response.data)
            setdadosBD(response.data)
            
        }).catch((err) => {

        })

        const [excluir, setExcluir] = useState(false);


        function handleClickExcluir() {
            
            //setConsultar(!excluir);
            alert("oi")
            
        }
    
    return (
        <div>
            <div>

                <div>
                    {dadosBD.map(dadosBD => (

                        <div key={dadosBD.cliente}>
                            <br/>
                            <span>Cliente: {dadosBD.cliente}</span> <br />
                            <span>descrição: {dadosBD.desc_cliente}</span> <br />
                            <button className='btnExcluir_alterar' >Alterar</button><button className='btnExcluir_alterar' type="button" onClick={handleClickExcluir}>excluir</button>
                            
                            <hr />
                            

                        </div>


                    ))}
                </div>

            </div>

        </div>



    )
}