import { useEffect, useState } from "react";
import axios from 'axios'

export default function Consult() {


    //// Declarar a variavel para receber os registrosda da API
    const [dadosBD, setdadosBD] = useState([]);

    axios.get(`http://localhost:8000/api-tabFilialCliente`)
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

                        <div key={dadosBD.codigo_filial_cliente}>
                            <br/>
                            <span>Cliente: {dadosBD.codigo_tabela_filial_cliente}</span> <br />
                            <span>Filial cliente: {dadosBD.codigo_filial_cliente}</span> <br />
                            <span>descrição: {dadosBD.descicao_filial_cliente}</span> <br />
                            <button className='btnExcluir_alterar' >Alterar</button><button className='btnExcluir_alterar'>excluir</button>
                            <hr />
                            

                        </div>


                    ))}
                </div>

            </div>

        </div>



    )
}