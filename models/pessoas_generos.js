'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas_generos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pessoas_generos.init({
    pessoas_id: DataTypes.INTEGER,
    generos_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pessoas_generos',
  });
  return pessoas_generos;
};