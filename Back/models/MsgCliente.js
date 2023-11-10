//CRIAR A TABELA NO BANCO DE DADOS

const Sequelize = require("sequelize");
const db = require('./db');

//CRIAR O NOME DA TABELA E AS COLUNAS
const MsgCliente = db.define('cliente',{

    cliente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    desc_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

//Criar tabela no BD
//MsgCliente.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgCliente.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgCliente.sync({ force: true });

module.exports = MsgCliente;
