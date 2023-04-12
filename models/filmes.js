'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class filmes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  filmes.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    titulo: DataTypes.STRING(200),
    duracao: DataTypes.INTEGER,
    genero: DataTypes.ENUM('AÇÃO','DRAMA', 'COMÉDIA','TERROR','OUTRO')
  }, {
    sequelize,
    modelName: 'filmes',
    timestamps:false
  });
  return filmes;
};