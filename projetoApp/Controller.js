import { CreateItemsController } from './src/Controller/pagStart/CreateItemsController';

//constantes

const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const model = require('./models')




const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.post('/produtos', new CreateItemsController().handle)

//apurado
app.post('/create',async(req,res)=>{
    let reqs = await model.apurado.create({
        'rfid_ap': req.body.rfid_ap,
        'cliente_ap': req.body.cliente_ap,
        'filial_cliente_ap': req.body.filialCliente_ap,
        'estoque': req.body.estoque,
        'data': req.body.currentDate
    })
})

app.get('/teste', (req, res) =>{
    return res.json({ok:true})
})


//depara
app.post('/collect',async(req,res)=>{
    let reqs = await model.depara.create({
        'rfid_dp': req.body.rfid_dp,
        'codigo_de_barras_cliente_dp': req.body.codigo_de_barras_cliente_dp,
        'quantidade': req.body.quantidade
    })
})

//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
    console.log(`rodando na porta: ${port}`)
});