//FORMULARIO DO CODIGO_PRODUTO

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Menu from '../src/components/Menu/Menu'
import api from '../src/services/api'
import Consult from '../src/components/Consult/apiCodProdutos'
import SelectCliente from '../src/components/SelectCliente/index.js.js'
import SelectFilialCliente from '../src/components/SelectFilialCliente/index.js'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar codigo dos produtos
function codigo_produto() {

    const [dadosBD, setdadosBD] = useState([]);

    useEffect(() => {
        
        async function loadDadosBD() {
            const response = await api.get("api-tabCodProdutos", {

            })
            console.log(response.data)
            setdadosBD(response.data)
                  
        }

        loadDadosBD();

    }, [])




    const [dataForm, setDataForm] = useState({
        codigo_prod_cliente: '',
        descricao_cod_cliente: '',
        grupo_cod_cliente: '',
        descricao_grupo_cod_cliente: '',
        sub_grupo_cod_cliente: '',
        descricao_sub_grupo_cod_cliente: '',
        valor_custo_cod_cliente: '',
        valor_venda_cod_cliente: '',
        estoque_cod_cliente: '',
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendCodProduto = async e => {
        e.preventDefault();
        console.log(dataForm.codigo_prod_cliente);
        console.log(dataForm.descricao_cod_cliente);
        console.log(dataForm.grupo_cod_cliente);
        console.log(dataForm.descricao_grupo_cod_cliente);
        console.log(dataForm.sub_grupo_cod_cliente);
        console.log(dataForm.descricao_sub_grupo_cod_cliente);
        console.log(dataForm.valor_custo_cod_cliente);
        console.log(dataForm.valor_venda_cod_cliente);
        console.log(dataForm.estoque_cod_cliente);

        const res = await fetch('http://localhost:8000/add-cod-produto', {
            method: 'POST',
            body: JSON.stringify(dataForm),
            headers: { 'Content-Type': 'application/json' }
        });
        const responseEnv = await res.json();

        if (responseEnv.erro) {
            alert("ERRO");
            console.log(responseEnv.mensagem)
        } else {
            alert("Produto cadastrado com sucesso!!");
            console.log(responseEnv.mensagem)
        }

        setDataForm({
            codigo_prod_cliente: '',
            descricao_cod_cliente: '',
            grupo_cod_cliente: '',
            descricao_grupo_cod_cliente: '',
            sub_grupo_cod_cliente: '',
            descricao_sub_grupo_cod_cliente: '',
            valor_custo_cod_cliente: '',
            valor_venda_cod_cliente: '',
            estoque_cod_cliente: ''
        });

    }

    //variavel para o botao consultar
    const [consultar, setConsultar] = useState(false);


    function handleClickConsultar() {
        setConsultar(!consultar);
    }

    //Parte da pagina web
    return <div>
        <Head>
            <meta charSet='utf-8' />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre..." />
            <meta name="author" content="Invata_RIO" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>codigo_produto</title>
        </Head>
        <Menu />

        <section className='Codigo_Produto'>
            <div>

                <br />
                <form onSubmit={sendCodProduto}>
                    
                    <br/> <SelectCliente/> <br/>

                    Selecione o codigo da Filial Cliente:
                    <SelectFilialCliente/> <br/>

                    Codigo produto:
                    <input style={espacoStyle} type="number" id="codigo_prod_cliente" name="codigo_prod_cliente" onChange={onChangeInput} value={dataForm.codigo_prod_cliente}></input>
                    Descrição:
                    <input style={espacoStyle} type="text" id="descricao_cod_cliente" name="descricao_cod_cliente" onChange={onChangeInput} value={dataForm.descricao_cod_cliente}></input>
                    Grupo:
                    <input style={espacoStyle} type="number" id="grupo_cod_cliente" name="grupo_cod_cliente" onChange={onChangeInput} value={dataForm.grupo_cod_cliente}></input>

                    <br /> <br />

                    Descrição do grupo:
                    <input style={espacoStyle} type="text" id="descricao_grupo_cod_cliente" name="descricao_grupo_cod_cliente" onChange={onChangeInput} value={dataForm.descricao_grupo_cod_cliente}></input>

                    Sub grupo:
                    <input style={espacoStyle} type="number" id="sub_grupo_cod_cliente" name="sub_grupo_cod_cliente" onChange={onChangeInput} value={dataForm.sub_grupo_cod_cliente}></input>
                    Descrição do sub grupo:
                    <input style={espacoStyle} type="text" id="descricao_sub_grupo_cod_cliente" name="descricao_sub_grupo_cod_cliente" onChange={onChangeInput} value={dataForm.descricao_sub_grupo_cod_cliente}></input>

                    <br /> <br />

                    Valor Custo:
                    <input style={espacoStyle} type="number" id="valor_custo_cod_cliente" name="valor_custo_cod_cliente" onChange={onChangeInput} value={dataForm.valor_custo_cod_cliente}></input>
                    Valor Venda:
                    <input style={espacoStyle} type="number" id="valor_venda_cod_cliente" name="valor_venda_cod_cliente" onChange={onChangeInput} value={dataForm.valor_venda_cod_cliente}></input>
                    Estoque:
                    <input style={espacoStyle} type="number" id="estoque_cod_cliente" name="estoque_cod_cliente" onChange={onChangeInput} value={dataForm.estoque_cod_cliente}></input>

                    <br /><br />

                    <div className='blocobtn'>
                        <br />
                        <div className='btn'>
                            <button type='submit'>Enviar</button>
                        </div>
                        <div className='btn'>
                            <button type='button' onClick={handleClickConsultar}>consultar</button>
                        </div>
                    </div>

                </form>


            </div>

            {consultar === true && (
                <Consult />
            )}

            {consultar === false && (<div></div>)}

        </section>
        <br />
        PÁGINA codigo_produto

    </div>
}

export default codigo_produto;