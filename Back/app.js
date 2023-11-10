

const express = require('express');
const cors = require('cors')
const app = express();

// =========================================================================================

//TRAZENDO OS DADOS DAS TABELAS
const MsgCodProduto = require('./models/MsgCodProduto');
const MsgFilialCliente = require('./models/MsgFilialCliente');
const MsgCadInventario = require('./models/MsgCadInventario');
const MsgCadMaquinas = require('./models/MsgCadMaquinas');
const MsgCliente = require('./models/MsgCliente')

// =========================================================================================

//CONFIGURANDO JSON
app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Acces-Control-Allow_Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

// =========================================================================================

//ROTAS

//ROTA DO CODIGO PRODUTO CONFERINDO O CADASTRO NO BANCO DE DADOS
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

//ROTA DO CLIENTE CONFERINDO O CADASTRO NO BANCO DE DADOS
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
            mensagem: "ERRO: Cliente NAO cadastrado!! **"
            
        });
    }); 
});

//ROTA DO FILIAL CLIENTE CONFERINDO O CADASTRO NO BANCO DE DADOS
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
                                    //***************//
//ROTA DA CHAVE ESTRANGEIRA DO CAD_INVENTARIO CONFERINDO SE DEU CERTO E PASSANDO OS DADOS
/*app.get('/add-cad-inventario', async (req, res) =>{
     MsgCadInventario.findAll({
        
    })
    .then((MsgCadInventario) =>{
        return res.json(MsgCadInventario, {erro: false});
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Deu erro no GET!!!"
        })
    })
    
})*/

//ROTA DO CADASTRO INVENTARIO CONFERINDO O CADASTRO NO BANCO DE DADOS
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
            mensagem: "ERRO: Inventario NÃO cadastrado!!!"
            
        });
    });
   
});

//ROTA DO CADASTRO DE MAQUINAS CONFERINDO O CADASTRO NO BANCO DE DADOS
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



// =========================================================================================


// APIs

app.get("/api-tabCodProdutos", (req,res) => {

    MsgCodProduto.findAll({}).then((MsgCodProduto) =>{
        return res.json(MsgCodProduto);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cliente encontrado **get /show**"
        })
    })
})

app.get("/api-tabCliente", (req,res) => {

    MsgCliente.findAll({}).then((MsgCliente) =>{
        return res.json(MsgCliente);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cliente encontrado **get /show**"
        })
    })
})

app.get("/api-tabFilialCliente", (req,res) => {

    MsgFilialCliente.findAll({}).then((MsgFilialCliente) =>{
        return res.json(MsgFilialCliente);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cliente encontrado **get /show**"
        })
    })
})

app.get("/api-tabCadInventario", (req,res) => {

    MsgCadInventario.findAll({}).then((MsgCadInventario) =>{
        return res.json(MsgCadInventario);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cliente encontrado **get /show**"
        })
    })
})

app.get("/api-tabCadMaquinas", (req,res) => {

    MsgCadMaquinas.findAll({}).then((MsgCadMaquinas) =>{
        return res.json(MsgCadMaquinas);
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cliente encontrado **get /show**"
        })
    })
})

// =========================================================================================

//VISUALIZAR

app.get("/MsgCodProduto/:id", (req, res) => {
    MsgCodProduto.findOne({id:req.params.id}).then((MsgCodProduto) => {
        return res.json(MsgCodProduto)
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum id encontrado"
        })
    })
})


app.get("/MsgCliente/:id", (req, res) => {
    MsgCliente.findOne({cliente:req.params.id}).then((MsgCliente) => {
        return res.json(MsgCliente)
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cliente encontrado"
        })
    })
})

app.get("/MsgFilialCliente/:id", (req, res) => {
    MsgFilialCliente.findOne({codigo_filial_cliente:req.params.id}).then((MsgFilialCliente) => {
        return res.json(MsgFilialCliente)
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhuma filial cliente encontrada"
        })
    })
})

app.get("/MsgCadInventario/:id", (req, res) => {
    MsgCadInventario.findOne({id:req.params.id}).then((MsgCadInventario) => {
        return res.json(MsgCadInventario)
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cadastro de inventario encontrado"
        })
    })
})

app.get("/MsgCadMaquinas/:id", (req, res) => {
    MsgCadMaquinas.findOne({id:req.params.id}).then((MsgCadMaquinas) => {
        return res.json(MsgCadMaquinas)
    }).catch((erro) =>{
        return res.status(400).json({
            error: true,
            mensagem: "Nenhum cadastro de inventario encontrado"
        })
    })
})

// =========================================================================================

//PORTA ONDE SERVIDOR ESTÁ CONECTADO
app.listen(8000, () =>{
    console.log("Servidor Ligado!!! Porta 8000")
})




//para o banco de dados:
//npm install --save sequelize
//npm install --save tedious

//INICIALIZAR O SERVIDOR
//nodemon app