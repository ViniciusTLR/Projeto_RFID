//CRIAR A TABELA NO BANCO DE DADOS

const Sequelize = require("sequelize");
const db = require('./db');
const MsgCliente = require('./MsgCliente');
const MsgFilialCliente = require("./MsgFilialCliente");

//CRIAR O NOME DA TABELA E AS COLUNAS
const MsgCadInventario = db.define('cad_inventario',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    cod_inventario:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    clienteId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    filial_clienteId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    data_inventario:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },

    desc_inventario:{
        type: Sequelize.STRING,
        allowNull: false
    },

    tamanho_cod_RFID:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
});


//ADICIONANDO CHAVE ESTRANGEIRA 
//MsgCadInventario.belongsTo(MsgCliente, {foreignKey: 'clienteId', allowNull: false})
//MsgCadInventario.belongsTo(MsgFilialCliente, {foreignKey: 'filial_clienteId', allowNull: false})

//Criar tabela no BD
//MsgCadInventario.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgCadInventario.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgCadInventario.sync({ force: true });

module.exports = MsgCadInventario;