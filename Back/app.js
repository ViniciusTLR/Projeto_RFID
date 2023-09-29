//nodemon app

const express = require('express');
const cors = require('cors')
const app = express();

const Home = require('./models/Home');
const MsgCodProduto = require('./models/MsgCodProduto');
const MsgFilialCliente = require('./models/MsgFilialCliente');
const MsgDePara = require('./models/MsgDePara');
const MsgCadInventario = require('./models/MsgCadInventario');
const MsgCadMaquinas = require('./models/MsgCadMaquinas');
const MsgCliente = require('./models/MsgCliente')

app.use(express.json());


app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Acces-Control-Allow_Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

app.get('/', async(req,res)=>{

    /*await Home.findOne({
        attributes: ['id','text_one', 'text_two', 'btn_enviar', 'btn_link']
    })
        .then((datahome) =>{
           return res.json({
            erro: false,
            datahome
           }) 
        }).catch(() =>{
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Nenum valor encontrado para a pagina Home!"
            });
        });*/


    return res.json({
        erro: false,
        datahome: {
            text_one: "Codigo:", 
            text_two:"Descrição:", 
            btn_enviar: "Enviar",
            btn_link: "http://localhost:3000/filial_cliente"
        }
    });
});


app.post('/add-home', async(req, res) => {

    const dataHome = await Home.findOne();

    if(dataHome){
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO ao tentar cadastar a pagina Home"
        });
    }

    await Home.create(req.body)
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Dados para página Home cadastrado com suceso!!"
        });
    }).catch(() =>{
        return res.json({
            erro: true,
            mensagem: "ERRO ao tentar cadastar a pagina Home"
        });
    });

});

//CODIGO PRODUTO
app.post("/add-cod-produto", async (req, res) =>{
    //console.log(req.body);

    await MsgCodProduto.create(req.body)
    .then((MsgCodProduto) =>{
        return res.json({
            erro: false,
            id: MsgCodProduto.id,
            mensagem: "Codigo de produto cadastrado com sucesso!!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Codigo de produto NÃO cadastrado!!"
        });
    });
   
});

//FILIAL CLIENTE
app.post("/add-filial-cliente", async (req, res) =>{
    //console.log(req.body);

    await MsgFilialCliente.create(req.body)
    .then((MsgFilialCliente) =>{
        return res.json({
            erro: false,
            id: MsgFilialCliente.id,
            mensagem: "Filial Cliente cadastrado com sucesso!!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Filial Cliente NÃO cadastrado!!"
        });
    });
   
});

//DE PARA
app.post("/add-depara", async (req, res) =>{
    //console.log(req.body);

    await MsgDePara.create(req.body)
    .then((MsgDePara) =>{
        return res.json({
            erro: false,
            id: MsgDePara.id,
            mensagem: "De Para cadastrado com sucesso!!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: De Para NÃO cadastrado!!"
        });
    });
   
});

//CADASTRO INVENTARIO
app.post("/add-cad-inventario", async (req, res) =>{
    //console.log(req.body);

    await MsgCadInventario.create(req.body)
    .then((MsgCadInventario) =>{
        return res.json({
            erro: false,
            id: MsgCadInventario.id,
            mensagem: "Inventario cadastrado com sucesso!!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Inventario NÃO cadastrado!!"
            
        });
    });
   
});

//CADASTRO MAQUINAS
app.post("/add-cad-maquinas", async (req, res) =>{
    //console.log(req.body);

    await MsgCadMaquinas.create(req.body)
    .then((MsgCadMaquinas) =>{
        return res.json({
            erro: false,
            id: MsgCadMaquinas.id,
            mensagem: "Maquina cadastrada com sucesso!!",
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Maquina NAO cadastrada!!"
            
        });
    });
   
});

//CLIENTE
app.post("/add-cliente", async (req, res) =>{
    //console.log(req.body);

    await MsgCliente.create(req.body)
    .then((MsgCliente) =>{
        return res.json({
            erro: false,
            id: MsgCliente.id,
            mensagem: "Cliente cadastrado com sucesso!!"
        });
    }).catch(()=>{
        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Cliente NAO cadastrado!!"
            
        });
    });
   
});

app.listen(8000, () =>{
    console.log("Servidor Ligado!!! Porta 8000")
})

//para o banco de dados:
//npm install --save sequelize
//npm install --save tedious