'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(256)
      },
      email: {
        type: Sequelize.STRING(256)
      },
      senha: {
        type: Sequelize.STRING(512)
      },
      data_nascimento: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.CHAR(1)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};