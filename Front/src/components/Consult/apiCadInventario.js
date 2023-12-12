import { useEffect, useState } from "react";
import axios from 'axios'

export default function Consult() {


    const [cdCliente, setcdCliente] = useState([]);

    const [dadosBD, setdadosBD] = useState([]);

    const [selectValue, setSelectValue] = useState([0]);

    axios.get(`http://localhost:8000/api-tabCadInventario`)
        .then((response) => {

            //Atribuir os registros no state data
            console.log(response.data)
            setdadosBD(response.data[selectValue])

        }).catch((err) => {

        })

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

    function mostrarDados() {

        return (

            <div key={dadosBD.cod_inventario}>
                <br />
                <span>Codigo Inventario: {dadosBD.cod_inventario}</span> <br />
                <span>cliente: {dadosBD.clienteId}</span> <br />
                <span>Filial Cliente: {dadosBD.filial_clienteId}</span> <br />
                <span>Data Inventario: {dadosBD.data_inventario}</span> <br />
                <span>Descrição Inventario: {dadosBD.desc_inventario}</span> <br />
                <span>Tamanho do codigo RFID: {dadosBD.tamanho_cod_RFID}</span> <br />
                <button className='btnExcluir_alterar' >Alterar</button>
                <button className='btnExcluir_alterar' >excluir</button>
                <hr />
            </div>

        )
    }

    return (

        <div>

            <div>

                <div>
                    {selecionarConsultar()}
                </div>

                <div>

                    {mostrarDados()}

                </div>
            </div>
        </div>
    )
}