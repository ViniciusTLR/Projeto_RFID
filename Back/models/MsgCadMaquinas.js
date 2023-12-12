//CRIAR A TABELA NO BANCO DE DADOS


const Sequelize = require("sequelize");
const db = require('./db');

//CRIAR O NOME DA TABELA E AS COLUNAS
const MsgCadMaquinas = db.define('cad_maquinas',{
    
    cod_maquina:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    nome_maquina:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

//Criar tabela no BD
//MsgCadMaquinas.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgCadMaquinas.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgCadMaquinas.sync({ force: true });

module.exports = MsgCadMaquinas;