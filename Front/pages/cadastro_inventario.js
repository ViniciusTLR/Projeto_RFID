//FORMULARIO DO CADASTRO_INVETARIO

import { useEffect, useState, Component } from 'react'
import Head from 'next/head'
import Menu from '../src/components/Menu/Menu'
import api from '../src/services/api'
import SelectCliente from '../src/components/SelectCliente/index.js.js'
import SelectFilialCliente from '../src/components/SelectFilialCliente/index.js'
import Consult from '../src/components/Consult/apiCadInventario.js'


const espacoStyle = {
    marginRight: 25
}


//funcao para cadastrar o formulario
function cadastro_inventario() {

    const [dadosBD, setdadosBD] = useState([]);

    useEffect(() => {
        
        async function loadDadosBD() {
            const response = await api.get("api-tabCadInventario", {

            })
            console.log(response.data)
            setdadosBD(response.data)
                  
        }

        loadDadosBD();

    }, [])

    const [dataForm, setDataForm] = useState({
        cod_inventario: '',
        clienteId: '',
        filial_clienteId: '',
        data_inventario: '',
        desc_inventario: '',
        tamanho_cod_RFID: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendCadInventario = async e => {
        e.preventDefault();
        console.log(dataForm.cod_inventario);
        console.log(dataForm.clienteId);
        console.log(dataForm.filial_clienteId);
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
            clienteId: '',
            filial_clienteId: '',
            data_inventario: '',
            desc_inventario: '',
            tamanho_cod_RFID: '',
        });

    } 

    //variavel para o botao consultar
    const [consultar, setConsultar] = useState(false);

    function handleClickConsultar(e) {
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
            <title>Cadastro Inventario</title>
        </Head>
        <Menu />

        <section className='Cad_Inventario'>

            <div>
                <form onSubmit={sendCadInventario}>

                <br/><SelectCliente/><br/>

                <span>Filiais:</span>
                    <SelectFilialCliente/> <br/>


                    <br />
                    Codigo Inventario:
                    <input style={espacoStyle} type="number" id="cod_inventario" name="cod_inventario" onChange={onChangeInput} value={dataForm.cod_inventario}></input>

                    cliente:
                     <input style={espacoStyle} type="select" id="clienteId" name="clienteId" onChange={onChangeInput} value={dataForm.clienteId}></input>

                    Filial Cliente:
                    <input style={espacoStyle} type="number" id="filial_clienteId" name="filial_clienteId" onChange={onChangeInput} value={dataForm.filial_clienteId}></input>

                    <br /> <br />

                    Data Inventario:
                    <input style={espacoStyle} type="date" id="data_inventario" name="data_inventario" onChange={onChangeInput} value={dataForm.data_inventario}></input>

                    Descrição Inventario:
                    <input style={espacoStyle} type="text" id="desc_inventario" name="desc_inventario" onChange={onChangeInput} value={dataForm.desc_inventario}></input>

                    Tamanho do codigo RFID:
                    <input style={espacoStyle} type="number" id="tamanho_cod_RFID" name="tamanho_cod_RFID" onChange={onChangeInput} value={dataForm.tamanho_cod_RFID}></input>
                    
                    <br /> <br />

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

        PÁGINA Cadastro Inventario
    </div>
}


export default cadastro_inventario;