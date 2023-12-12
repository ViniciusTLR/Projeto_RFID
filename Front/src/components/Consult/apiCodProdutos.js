import { useEffect, useState } from "react";
import axios from 'axios';


export default function Consult() {


    const [cdCliente, setcdCliente] = useState([]);

    const [dadosBD, setdadosBD] = useState([]);

    const [selectValue, setSelectValue] = useState([0]);

    axios.get(`http://localhost:8000/api-tabCodProdutos`)
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

            <div key={dadosBD.codigo_prod_cliente}>
                <br />
                <span>Codigo produto: {dadosBD.codigo_prod_cliente}</span> <br />
                <span>Descrição: {dadosBD.descricao_cod_cliente}</span> <br />
                <span>Grupo: {dadosBD.grupo_cod_cliente}</span> <br />
                <span>Descrição do grupo: {dadosBD.descricao_grupo_cod_cliente}</span> <br />
                <span>Sub grupo: {dadosBD.sub_grupo_cod_cliente}</span> <br />
                <span>Descrição do sub grupo: {dadosBD.descricao_sub_grupo_cod_cliente}</span> <br />
                <span>Valor Custo: {dadosBD.valor_custo_cod_cliente}</span> <br />
                <span>Valor Venda: {dadosBD.valor_venda_cod_cliente}</span> <br />
                <span>Estoque: {dadosBD.estoque_cod_cliente}</span> <br />
                <button className='btnExcluir_alterar' >Alterar</button>
                <button className='btnExcluir_alterar'>excluir</button>
                <hr />


            </div>

        )
    }





    return (
        <div>

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



            {/*<div>

                <div>
                    {dadosBD.map(dadosBD => (

                        <div key={dadosBD.codigo_prod_cliente}>
                            <br/>
                            <span>Codigo produto: {dadosBD.codigo_prod_cliente}</span> <br />
                            <span>Descrição: {dadosBD.descricao_cod_cliente}</span> <br />
                            <span>Grupo: {dadosBD.grupo_cod_cliente}</span> <br />
                            <span>Descrição do grupo: {dadosBD.descricao_grupo_cod_cliente}</span> <br />
                            <span>Sub grupo: {dadosBD.sub_grupo_cod_cliente}</span> <br />
                            <span>Descrição do sub grupo: {dadosBD.descricao_sub_grupo_cod_cliente}</span> <br />
                            <span>Valor Custo: {dadosBD.valor_custo_cod_cliente}</span> <br />
                            <span>Valor Venda: {dadosBD.valor_venda_cod_cliente}</span> <br />
                            <span>Estoque: {dadosBD.estoque_cod_cliente}</span> <br />
                            <button className='btnExcluir_alterar' >Alterar</button><button 
                            className='btnExcluir_alterar'>excluir</button>
                            <hr />
                            

                        </div>


                    ))}
                </div>

                    </div>*/}

        </div>



    )
}