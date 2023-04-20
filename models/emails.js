'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.pessoas, {
        as: 'pessoa',
        foreignKey:'pessoas_id'
      })
    }
  }
  emails.init({
    email: DataTypes.STRING,
    pessoas_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'emails',
  });
  return emails;
};