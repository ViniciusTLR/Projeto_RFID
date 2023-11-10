//FORMULARIO DO FILIAL_CLIENTE


import { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar FILIAL CLIENTE
function filial_cliente() {

    const [dataForm, setDataForm] = useState({
        codigo_filial_cliente: '',
        descicao_filial_cliente: '',
        codigo_tabela_filial_cliente: '',
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendFilialCliente = async e => {
        e.preventDefault();
        console.log(dataForm.codigo_filial_cliente);
        console.log(dataForm.descicao_filial_cliente);
        console.log(dataForm.codigo_tabela_filial_cliente);

        if (dataForm.codigo_filial_cliente === '') {
            alert("ERRO! Preencha o codigo da Filial")
        } else if (dataForm.codigo_filial_cliente <= '0') {
            alert("Apenas numeros maiores que 0!")
        } else if (dataForm.descicao_filial_cliente === '') {
            alert("ERRO! preencha a descrição da Filial")
        } else if (dataForm.codigo_tabela_filial_cliente === '') {
            alert("ERRO! preencha o codigo da tabela filial cliente")
        } else {

            const res = await fetch('http://localhost:8000/add-filial-cliente', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });
            const responseEnv = await res.json();

            if (responseEnv.erro) {
                alert("ERRO");
                console.log(responseEnv.mensagem)
            } else {
                alert("Filial Cliente cadastrado com sucesso!!");
                console.log(responseEnv.mensagem)
            }

            setDataForm({
                codigo_filial_cliente: '',
                descicao_filial_cliente: '',
                codigo_tabela_filial_cliente: ''
            });

        }

    }


    //Parte da pagina web
    return <div>
        <Head>
            <meta charSet='utf-8' />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre..." />
            <meta name="author" content="Invata_RIO" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>filial_cliente</title>
        </Head>
        <Menu />
        <section className='Filial_Cliente'>
            <div>

                <br />
                <form onSubmit={sendFilialCliente}>
                    Codigo tabela cliente:
                    <input style={espacoStyle} type="number" id="codigo_tabela_filial_cliente" name="codigo_tabela_filial_cliente" onChange={onChangeInput} value={dataForm.codigo_tabela_filial_cliente}></input>

                    Codigo da Filial:
                    <input style={espacoStyle} type="number" id="codigo_filial_cliente" name="codigo_filial_cliente" onChange={onChangeInput} value={dataForm.codigo_filial_cliente}></input>
                    Descrição:
                    <input style={espacoStyle} type="text" id="descicao_filial_cliente" name="descicao_filial_cliente" onChange={onChangeInput} value={dataForm.descicao_filial_cliente}></input>

                    <div name="botaoEnviar">
                        <br />
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </section>
        <br />
        PÁGINA filial_cliente

    </div>
}

export default filial_cliente;