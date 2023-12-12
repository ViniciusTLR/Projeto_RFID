//FORMULARIO DE_PARA

import { useState } from 'react'
import Head from 'next/head'
import Menu from '../src/components/Menu/Menu'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar DE PARA
function de_para() {

    const [dataForm, setDataForm] = useState({
        codigo_RFID_dp: '',
        codigo_barras_cliente_dp: '',
        codigo_cliente_dp: '',
        codigo_filial_cliente_db: '',
        quantidade_db: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendDePara = async e => {
        e.preventDefault();
        console.log(dataForm.codigo_RFID_dp);
        console.log(dataForm.codigo_barras_cliente_dp);
        console.log(dataForm.codigo_cliente_dp);
        console.log(dataForm.codigo_filial_cliente_db);
        console.log(dataForm.quantidade_db);

        const res = await fetch('http://localhost:8000/add-depara', {
            method: 'POST',
            body: JSON.stringify(dataForm),
            headers: { 'Content-Type': 'application/json' }
        });
        const responseEnv = await res.json();

        if (responseEnv.erro) {
            alert("ERRO");
            console.log(responseEnv.mensagem)
        } else {
            alert("De Para cadastrado com sucesso!!");
            console.log(responseEnv.mensagem)
        }

        setDataForm({
            codigo_RFID_dp: '',
            codigo_barras_cliente_dp: '',
            codigo_cliente_dp: '',
            codigo_filial_cliente_db: '',
            quantidade_db: ''
        });

        /*try {
            const res = await fetch('http://localhost:8000/add-depara', {
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
                codigo_RFID_dp: '',
                codigo_barras_cliente_dp: '',
                codigo_cliente_dp: '',
                codigo_filial_cliente_db: '',
                quantidade_db: '',
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
            <title>De_Para</title>
        </Head>
        <Menu />

        <section className='De_Para'>

        <div>
            <form onSubmit={sendDePara}>
                <br />
                Codigo RFID:
                <input style={espacoStyle} type="number" id="codigo_RFID_dp" name="codigo_RFID_dp" onChange={onChangeInput} value={dataForm.codigo_RFID_dp} ></input>
                codigo barras cliente:
                <input style={espacoStyle} type="number" id="codigo_barras_cliente_dp" name="codigo_barras_cliente_dp" onChange={onChangeInput} value={dataForm.codigo_barras_cliente_dp}></input>
                codigo cliente:
                <input style={espacoStyle} type="number" id="codigo_cliente_dp" name="codigo_cliente_dp" onChange={onChangeInput} value={dataForm.codigo_cliente_dp}></input>
                <br /> <br />

                Codigo filial Cliente:
                <input style={espacoStyle} type="number" id="codigo_filial_cliente_db" name="codigo_filial_cliente_db" onChange={onChangeInput} value={dataForm.codigo_filial_cliente_db}></input>

                quantidade:
                <input style={espacoStyle} type="number" id="quantidade_db" name="quantidade_db" onChange={onChangeInput} value={dataForm.quantidade_db}></input>

                <div name="botaoEnviar">
                    <br />
                    <button type='submit'>consultar</button>
                </div>
            </form>
            </div>
        </section>
        <br />
        PÁGINA DE PARA
    </div>
}

export default de_para;