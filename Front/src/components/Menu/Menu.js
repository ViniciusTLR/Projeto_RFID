//AQUI ESTAO OS LINKS PARA PREENCHER OS FORMULARIOS
import Link from "next/link";



const Menu = () =>(
    <div className="menu">

        <div >

            <Link href="/codigo_produto">
                codigo produto
            </Link>

            /

            <Link  href="/">
                Cliente
            </Link>

            /

            <Link  href="/filial_cliente">
                Filial cliente
            </Link>

            /

            <Link  href="/de_para">
                de para
            </Link>

            /

            <Link  href="/cadastro_inventario">
                cadastro inventario
            </Link>

            /

            <Link  href="/cadastro_maquinas">
                cadastro maquinas
            </Link>

                
            
        </div>

       
    </div>
);

export default Menu;