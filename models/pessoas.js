'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.emails, {
        as: 'emails',
        foreignKey:'pessoas_id'
      })

      this.belongsToMany(models.generos, {
        through: 'pessoas_generos',
        as: 'generos',
        foreignKey:'pessoas_id'
      })
    }
  }
  pessoas.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pessoas',
  });
  return pessoas;
};