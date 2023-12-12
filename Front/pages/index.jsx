//FORMULARIO DA PAGINA CLIENTE


import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Menu from '../src/components/Menu/Menu'
import Consult from '../src/components/Consult/apiCLiente'
import Excluir from '../src/components/Excluir/clienteExcluir'
import axios from 'axios'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar o cliente
function cliente() {

    const [dadosBD, setdadosBD] = useState([]);

    //cliente e desc_cliente receberem um valor vazio
    const [dataForm, setDataForm] = useState({
        desc_cliente: '',
    })

    useEffect(() => {

        axios.get("http://localhost:8000/api-tabCliente")
            .then((response) => {

                //Atribuir os registros no state data
                console.log(response.data);
                setdadosBD(response.data);


            }).catch((err) => {

            })
    }, [])


    //pega o valor do input pelo name
    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    //quando clicar no botao faça a função abaixo
    const sendCliente = async e => {

        //nao atualizar a pagina
        e.preventDefault();
        console.log(dataForm.desc_cliente);

        //validar os campos se estao vazios, menor ou igual a 0
        if (dataForm.desc_cliente === '') {
            alert("ERRO! preencha a descrição do cliente")
        }else {

            //rota para o http do link cliente
            const res = await fetch('http://localhost:8000/add-cliente', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });

            //esperar a resposta da rota
            const responseEnv = await res.json();

            //validar se a resposta da rota deu erro ou fou completada
            if (responseEnv.erro) {
                alert("ERRO *");
                console.log(responseEnv.mensagem)
            } else {
                alert("Cliente cadastrado com sucesso!!");
                console.log(responseEnv.mensagem)
            }

            //resetar os campos
            setDataForm({

                desc_cliente: ''
            });

        }

    }

    //variavel para o botao consultar
    const [consultar, setConsultar] = useState(false);

    function handleClickConsultar() {
        setConsultar(!consultar);
    }

    console.log(dadosBD.indexOf('1'))

    //Parte da pagina web
    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Site sobre..." />
                <meta name="author" content="Invata_RIO" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Cliente</title>
            </Head>
            <Menu />
            <section className='Cad-Cliente'>

                <div>
                    <br />

                    <form onSubmit={sendCliente}>
                    <p>Ultimo cliente cadastrado: {dadosBD.length -1 +1}</p>
                    <p>{dadosBD.indexOf()}</p>
                        
                        {/*dadosBD.map(cliente => (
                            <p key={cliente.cliente}>{cliente.cliente}</p>
                        ))*/}
                        <br />
                        Descrição:
                        <input style={espacoStyle} type="text" id="desc_cliente" name="desc_cliente" onChange={onChangeInput} value={dataForm.desc_cliente}></input>

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
            PÁGINA Clientes

        </div>
    )
}


/*export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8000/`);
    const data = await response.json();
    //console.log(data);

    return { props: { data } };
}*/

export default cliente;


//npm run dev

// npm install --save-dev nodemon


//08/11/2023
//npm install json-server
//https://www.youtube.com/watch?v=KCcSzv1RmuI

//crud react celke