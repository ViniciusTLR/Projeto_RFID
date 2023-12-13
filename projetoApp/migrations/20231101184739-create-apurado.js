'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('apurados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rfid_ap: {
        type: Sequelize.INTEGER
      },
      cliente_ap: {
        type: Sequelize.INTEGER
      },
      filial_cliente_ap: {
        type: Sequelize.INTEGER
      },
      estoque: {
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('apurados');
  }
};