import { useEffect, useState } from "react";
import axios from 'axios'

export default function Consult() {


    //// Declarar a variavel para receber os registrosda da API
    const [dadosBD, setdadosBD] = useState([]);

    axios.get(`http://localhost:8000/api-tabCadMaquinas`)
        .then((response) => {

            //Atribuir os registros no state data
            console.log(response.data)
            setdadosBD(response.data)
            
        }).catch((err) => {

        })
    



    return (
        <div>
            <div>

                <div>
                    {dadosBD.map(dadosBD => (

                        <div key={dadosBD.cod_maquina}>
                            <br/>
                            <span>Codigo Maquina: {dadosBD.cod_maquina}</span> <br />
                            <span>Nome da Maquina: {dadosBD.nome_maquina}</span> <br />
                            <button className='btnExcluir_alterar' >Alterar</button><button className='btnExcluir_alterar'>excluir</button>
                            <hr />
                            

                        </div>


                    ))}
                </div>

            </div>

        </div>



    )
}