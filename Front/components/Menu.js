import Link from "next/link";

const espacoStyle ={
    marginRight: 25
}

const Menu = () =>(
    <div>

        <div>

            <Link style={espacoStyle} href="/apurado">
                Apurado
            </Link>

            <Link style={espacoStyle} href="/codigo_produto">
                codigo_produto
            </Link>

            <Link style={espacoStyle} href="/">
                Cliente
            </Link>

            <Link style={espacoStyle} href="/filial_cliente">
                Filial_cliente
            </Link>

            <Link style={espacoStyle} href="/de_para">
                de_para
            </Link>

            <Link style={espacoStyle} href="/cadastro_inventario">
                cadastro_inventario
            </Link>

            <Link style={espacoStyle} href="/cadastro_maquinas">
                cadastro_maquinas
            </Link>


            
        </div>

       
    </div>
);

export default Menu;