import { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'

const espacoStyle = {
    marginRight: 25
}

function cadastro_inventario() {

    const [dataForm, setDataForm] = useState({
        cod_inventario: '',
        cliente: '',
        filial_cliente: '',
        data_inventario: '',
        desc_inventario: '',
        tamanho_cod_RFID: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendCadInventario = async e => {
        e.preventDefault();
        console.log(dataForm.cod_inventario);
        console.log(dataForm.cliente);
        console.log(dataForm.filial_cliente);
        console.log(dataForm.data_inventario);
        console.log(dataForm.desc_inventario);
        console.log(dataForm.tamanho_cod_RFID);

        const res = await fetch('http://localhost:8000/add-cad-inventario', {
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
            cod_inventario: '',
            cliente: '',
            filial_cliente: '',
            data_inventario: '',
            desc_inventario: '',
            tamanho_cod_RFID: '',
        });

        /*try {
            const res = await fetch('http://localhost:8000/add-cad-inventario', {
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
                cod_inventario: '',
                cliente: '',
                filial_cliente: '',
                data_inventario: '',
                desc_inventario: '',
                tamanho_cod_RFID: ''
            });


        } catch (err) {
            console.log("ERRO: Tente novamente")
        }*/
    }

    return <div>
        <Head>
            <meta charSet='utf-8' />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre..." />
            <meta name="author" content="Invata_RIO" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Cadastro Inventario</title>
        </Head>
        <Menu />

        <section className='Cad_Inventario'>

            <div>
                <form onSubmit={sendCadInventario}>

                    <br />
                    Codigo Inventario:
                    <input style={espacoStyle} type="number" id="cod_inventario" name="cod_inventario" onChange={onChangeInput} value={dataForm.cod_inventario}></input>

                    Cliente:
                    <input style={espacoStyle} type="number" id="cliente" name="cliente" onChange={onChangeInput} value={dataForm.cliente}></input>

                    Filial Cliente:
                    <input style={espacoStyle} type="number" id="filial_cliente" name="filial_cliente" onChange={onChangeInput} value={dataForm.filial_cliente}></input>

                    <br /> <br />

                    Data Inventario:
                    <input style={espacoStyle} type="date" id="data_inventario" name="data_inventario" onChange={onChangeInput} value={dataForm.data_inventario}></input>

                    Descrição Inventario:
                    <input style={espacoStyle} type="text" id="desc_inventario" name="desc_inventario" onChange={onChangeInput} value={dataForm.desc_inventario}></input>

                    Tamanho do codigo RFID:
                    <input style={espacoStyle} type="number" id="tamanho_cod_RFID" name="tamanho_cod_RFID" onChange={onChangeInput} value={dataForm.tamanho_cod_RFID}></input>

                    <div name="botaoEnviar">
                        <br />
                        <button type='submit'>Enviar</button>
                    </div>
                </form>

            </div>
        </section>

        PÁGINA Cadastro Inventario
    </div>
}

export default cadastro_inventario;