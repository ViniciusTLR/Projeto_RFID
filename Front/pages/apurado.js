import Head from 'next/head'
import Menu from '../components/Menu'
import Link from "next/link";

const espacoStyle = {
    marginRight: 25
}

function apurado() {
    return <div>
        <Head>
            <meta charSet='utf-8' />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Site sobre..." />
            <meta name="author" content="Invata_RIO" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Apurado</title>
        </Head>
        <Menu />

        <div>

            <br />
            <form>
                Codigo RFID:
                <input style={espacoStyle} type="number" id="codigo_RFID" name="codigo_RFID"></input>
                Codigo cliente:
                <input style={espacoStyle} type="number" id="codigo_cliente" name="codigo_cliente"></input>
                Codigo filial_cliente:
                <input style={espacoStyle} type="number" id="Codigo_filial_cliente:" name="Codigo_filial_cliente:"></input>
                Estoque:
                <input style={espacoStyle} type="number" id="Estoque" name="Estoque"></input>

                    <br /> <br />

                    <button type='submit'>Enviar</button>
                
            </form>
        </div>

        <br />
        PÁGINA APURADO

    </div>
}

export default apurado;