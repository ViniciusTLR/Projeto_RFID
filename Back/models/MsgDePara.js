const Sequelize = require("sequelize");
const db = require('./db');

const MsgDePara = db.define('de_paras',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    codigo_RFID_dp:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    codigo_barras_cliente_dp:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    codigo_cliente_dp:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    codigo_filial_cliente_db:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    quantidade_db:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
});

//Criar tabela no BD
//MsgDePara.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgDePara.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgDePara.sync({ force: true });

module.exports = MsgDePara;