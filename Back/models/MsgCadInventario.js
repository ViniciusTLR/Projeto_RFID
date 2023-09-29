const Sequelize = require("sequelize");
const db = require('./db');

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

    cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    filial_cliente:{
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

//Criar tabela no BD
//MsgCadInventario.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgCadInventario.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgCadInventario.sync({ force: true });

module.exports = MsgCadInventario;