//CRIAR A TABELA NO BANCO DE DADOS


const Sequelize = require("sequelize");
const db = require('./db');

//CRIAR O NOME DA TABELA E AS COLUNAS
const MsgCadMaquinas = db.define('cad_maquinas',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    cod_maquina:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    nome_maquina:{
        type: Sequelize.INTEGER,
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