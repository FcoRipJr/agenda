'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class generos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.pessoas, {
        through: 'pessoas_generos',
        as: 'pessoas',
        foreignKey:'generos_id'
      })
    }
  }
  generos.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'generos',
  });
  return generos;
};