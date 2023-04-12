'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contatos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contatos.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    nome: DataTypes.STRING(200),
    numero: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'contatos',
    timestamps:false
  });
  return contatos;
};