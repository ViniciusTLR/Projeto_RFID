const Sequelize = require("sequelize");
const db = require('./db');

const Home = db.define('teste',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text_one:{
        type: Sequelize.STRING,
        allowNull: false
    },
    text_two:{
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_enviar:{
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_link:{
        type: Sequelize.STRING,
        allowNull: false
    },

    
});

//Criar tabela no BD
//Home.sync();

//Verifica se há alhuma diferença na tabela, realiza a alteração
//Home.sync({ alter: true });

//Primeiro apaga a tabeça e dps cria a tabela dnv
//Home.sync({ force: true });

module.exports = Home;