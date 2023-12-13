'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apurado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  apurado.init({
    rfid_ap: DataTypes.INTEGER,
    cliente_ap: DataTypes.INTEGER,
    filial_cliente_ap: DataTypes.INTEGER,
    estoque: DataTypes.INTEGER,
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'apurado',
  });
  return apurado;
};