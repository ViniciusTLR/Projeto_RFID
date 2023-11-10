//FORMULARIO DO CODIGO_PRODUTO

import { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'



const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar codigo dos produtos
function codigo_produto() {

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


        /*try {
            const res = await fetch('http://localhost:8000/add-cod-produto', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

            if (responseEnv.erro) {
                console.log(responseEnv.mensagem)
            } else {
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
                estoque_cod_cliente: '',
            });


        } catch (err) {
            console.log("ERRO: Tente novamente")
        }*/
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

                    <button type='submit'>Enviar</button>
                </form>


            </div>
        </section>
        <br />
        PÁGINA codigo_produto

    </div>
}

export default codigo_produto;