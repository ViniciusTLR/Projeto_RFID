//npm run dev

// npm install --save-dev nodemon
import { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'


const espacoStyle = {
    marginRight: 25
}

function cliente() {

    const [dataForm, setDataForm] = useState({
        cliente: '',
        desc_cliente: '',
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendCliente = async e => {
        e.preventDefault();
        console.log(dataForm.cliente);
        console.log(dataForm.desc_cliente);

        const res = await fetch('http://localhost:8000/add-cliente', {
            method: 'POST',
            body: JSON.stringify(dataForm),
            headers: { 'Content-Type': 'application/json' }
        });
        const responseEnv = await res.json();

        if (responseEnv.erro) {
            alert("ERRO");
            console.log(responseEnv.mensagem)
        } else {
            alert("Cliente cadastrado com sucesso!!");
            console.log(responseEnv.mensagem)
        }

        setDataForm({
            cliente: '',
            desc_cliente: ''
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

                        <div>
                            <br />
                            <button type='submit'>Enviar</button>
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