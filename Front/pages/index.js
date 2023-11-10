//FORMULARIO DA PAGINA CLIENTE


import { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'

const espacoStyle = {
    marginRight: 25
}

//funcao para cadastrar o cliente
function cliente() {

    //cliente e desc_cliente receberem um valor vazio
    const [dataForm, setDataForm] = useState({
        cliente: '',
        desc_cliente: '',
    })

    //pega o valor do input pelo name
    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    //quando clicar no botao faça a função abaixo
    const sendCliente = async e => {

        //nao atualizar a pagina
        e.preventDefault();
        console.log(dataForm.cliente);
        console.log(dataForm.desc_cliente);

        //validar os campos se estao vazios, menor ou igual a 0
        if(dataForm.cliente === ''){
            alert("ERRO! preencha o codigo do cliente")
        }else if(dataForm.cliente <= '0'){
            alert("Apenas numeros maiores que 0!")
        }else if(dataForm.desc_cliente === ''){
            alert("ERRO! preencha a descrição do cliente")
        }else{
            
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
            cliente: '',
            desc_cliente: ''
        });
            
        }

    }

    

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
                            Cliente:
                            <input style={espacoStyle} type="number" id="cliente" name="cliente" onChange={onChangeInput} value={dataForm.cliente}></input>
                        <br />
                            Descrição:
                            <input style={espacoStyle} type="text" id="desc_cliente" name="desc_cliente" onChange={onChangeInput} value={dataForm.desc_cliente}></input>

                        <div className='blocobtn'>
                            <br />
                            <div className='btn'>
                            <button type='submit'>Enviar</button>
                            </div>
                            <div className='btn'>
                            <button type='button'>alterar</button>
                            </div> 
                            <div className='btn'>
                            <button type='reset'>consultar</button>
                            </div>
                            <div className='btn'>
                            <button type='reset'>excluir</button>
                            </div>
                            
                        </div>


                    </form>

                </div>
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