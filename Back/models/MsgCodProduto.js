//CRIAR A TABELA NO BANCO DE DADOS

const Sequelize = require("sequelize");
const db = require('./db');

//CRIAR O NOME DA TABELA E AS COLUNAS
const MsgCodProduto = db.define('codigo_produtos',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    codigo_prod_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    descricao_cod_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    grupo_cod_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    descricao_grupo_cod_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },

    sub_grupo_cod_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    descricao_sub_grupo_cod_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },


    valor_custo_cod_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    valor_venda_cod_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    estoque_cod_cliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    
});

//Criar tabela no BD
//MsgCodProduto.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//MsgCodProduto.sync({ alter: true });

//Primeiro apaga a tabela e dps cria a tabela dnv
//MsgCodProduto.sync({ force: true });

module.exports = MsgCodProduto;