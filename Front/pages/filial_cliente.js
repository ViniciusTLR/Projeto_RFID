//FORMULARIO DO FILIAL_CLIENTE


import { useEffect, useState } from 'react'
import Head from 'next/head'
import Menu from '../src/components/Menu/Menu'
import api from '../src/services/api'
import axios from 'axios'
import Consult from '../src/components/Consult/apiFilialCliente'
import { useParams } from 'react-router-dom'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar FILIAL CLIENTE
function filial_cliente() {

    //varialvel para armazenar os clientes
    const [cdCliente, setcdCliente] = useState([]);

    const [cdFilial, setcdFilial] = useState([]);

    //variavel para guardar valor escolhido
    const [selectValueCliente, setValueCliente] = useState([0]);

    const [selectValueFilial, setValueFilial] = useState([0]);


    const [dataForm, setDataForm] = useState({
        codigo_filial_cliente: '',
        descicao_filial_cliente: '',

    })

    useEffect(() => {
        //vai na api e busca os clientes existentes e salva na variavel
        axios.get("http://localhost:8000/api-tabCliente")
            .then((response) => {

                //Atribuir os registros no state data
                console.log(response.data);
                setcdCliente(response.data);


            }).catch((err) => {

            })

        axios.get("http://localhost:8000/api-tabFilialCliente")
            .then((response) => {

                //Atribuir os registros no state data
                console.log(response.data);
                setcdFilial(response.data);


            }).catch((err) => {

            })
    }, [])

    function selecionarConsultarCliente(selectValueCliente) {
        
        return (
            <div>
                <span>Cliente: </span>
                <select value={selectValueCliente} onChange={e => setValueCliente(e.target.value)} name="codigocliente" id="codigocliente">
                    <option value={1}>{selectValueCliente} </option>
                    {cdCliente.map((cliente) => (
                        <option key={cliente.cliente} value={cliente.cliente}>{cliente.desc_cliente} - {cliente.cliente} </option>
                    )) }
                </select>

                
                
            </div>
        )
    }

    function selecionarConsultarFilial(){
        
        return(
            <div>
                <span>Filial: </span>
                <select value={''} onChange={e => setValueFilial(e.target.value)} name="codigofilialcliente" id="codigofilialcliente">
                    <option value={0}>{selectValueFilial} </option>

                    {selectValueCliente == 1 ? (
                        
                        cdFilial.map((cdFilial, codigo_filial_cliente ) => (
                            
                            <option key={codigo_filial_cliente} value={cdFilial.codigo_filial_cliente}>

                                {cdFilial.descicao_filial_cliente} - {cdFilial.codigo_filial_cliente}



                            </option>
                        ))) : (<option>"nao existe filial"</option>)}
                </select>
                            <p>{selectValueCliente}</p>
                            
            </div>
        )
    }

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });


    const sendFilialCliente = async e => {
        e.preventDefault();

        console.log(selectValueCliente);
        console.log(dataForm.codigo_filial_cliente);
        console.log(dataForm.descicao_filial_cliente);

        console.log(dataForm.codigo_filial_cliente = selectValueCliente + dataForm.codigo_filial_cliente)

        if (dataForm.descicao_filial_cliente === '') {
            alert("ERRO! preencha a descrição da Filial")
        } else if (dataForm.codigo_filial_cliente === '0') {
            alert("ERRO! Digite a filial")
        } else if (selectValueCliente === '0') {
            alert("ERRO! Cliente não pode ser 0")
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
            <title>filial_cliente</title>
        </Head>
        <Menu />
        <section className='Filial_Cliente'>
            <div>
                <br />
                <form onSubmit={sendFilialCliente}>

                    {selecionarConsultarCliente()}
                    <br />
                    {selecionarConsultarFilial()}
                    <br/>

                    Codigo da Filial:
                    <input style={espacoStyle} type="number" id="codigo_filial_cliente" name="codigo_filial_cliente" onChange={onChangeInput} value={dataForm.codigo_filial_cliente}></input>
                    Descrição:
                    <input style={espacoStyle} type="text" id="descicao_filial_cliente" name="descicao_filial_cliente" onChange={onChangeInput} value={dataForm.descicao_filial_cliente}></input>

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

                <br />
                {consultar === true && (
                    <Consult />
                )}

                {consultar === false && (<div></div>)}

            </div>
        </section>
        <br />
        PÁGINA filial_cliente

        <br />



    </div>
}

export default filial_cliente;


//https://www.youtube.com/watch?v=UmLsPEC0_V4