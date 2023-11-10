//CRIAR A TABELA NO BANCO DE DADOS

const Sequelize = require("sequelize");
const db = require('./db');

//CRIAR O NOME DA TABELA E AS COLUNAS
const MsgFilialCliente = db.define('filial_cliente',{
    
    codigo_filial_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    descicao_filial_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    codigo_tabela_filial_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
});

//Criar tabela no BD
//MsgFilialCliente.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgFilialCliente.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgFilialCliente.sync({ force: true });

module.exports = MsgFilialCliente;