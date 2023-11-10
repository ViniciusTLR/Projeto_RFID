//FORMULARIO DO CADASTRO_MAQUINAS

import { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar de maquinas
function cadastro_maquinas() {

    const [dataForm, setDataForm] = useState({
        cod_maquina: '',
        nome_maquina: '',
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendCadMaquina = async e => {
        e.preventDefault();
        console.log(dataForm.cod_maquina);
        console.log(dataForm.nome_maquina);

        const res = await fetch('http://localhost:8000/add-cad-maquinas',{
            method: 'POST',
            body: JSON.stringify(dataForm),
            headers: { 'Content-Type': 'application/json' }
        });
        const responseEnv = await res.json();

        if(responseEnv.erro){
            alert("ERRO");
            console.log(responseEnv.mensagem)
        }else{
            alert("Maquina cadastrada com sucesso!!");
            console.log(responseEnv.mensagem)
        }

        setDataForm({
            cod_maquina: '',
            nome_maquina: ''
        });

        /*try {
            const res = await fetch('http://localhost:8000/add-cad-maquinas', {
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
                cod_maquina: '',
                nome_maquina: ''
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
            <title>Cadastro Maquinas</title>
        </Head>
        <Menu />
        <section className='Cad_Maquinas'>

            <div>
                <form onSubmit={sendCadMaquina}>
                    <br />

                    Codigo Maquina:
                    <input style={espacoStyle} type="number" id="cod_maquina" name="cod_maquina" onChange={onChangeInput} value={dataForm.cod_maquina}></input>

                    Nome da Maquina:
                    <input style={espacoStyle} type="number" id="nome_maquina" name="nome_maquina" onChange={onChangeInput} value={dataForm.nome_maquina}></input>

                    <div name="botaoEnviar">
                        <br />
                        <button type='submit' >Enviar</button>
                    </div>
                </form>
            </div>
        </section>
        <br />
        PÁGINA Cadastro Maquinas
    </div>
}

export default cadastro_maquinas;