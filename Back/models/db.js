

const Sequelize = require('sequelize');

const sequelize = new Sequelize('Teste','sa','123456',{
    host: 'localhost',
    dialect: 'mssql'
});

sequelize.authenticate()
.then(() =>{
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch(() =>{
    console.log("Erro ao tentar conectar com o banco de dados!");
});

module.exports = sequelize;