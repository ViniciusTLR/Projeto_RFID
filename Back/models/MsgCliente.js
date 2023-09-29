const Sequelize = require("sequelize");
const db = require('./db');

const MsgCliente = db.define('cliente',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
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