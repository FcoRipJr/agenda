'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('filmes', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey:true
      },
      titulo: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      duracao: Sequelize.INTEGER,
      genero:{
        type: Sequelize.ENUM('AÇÃO','DRAMA', 'COMÉDIA','TERROR','OUTRO'),
        default: 'OUTRO'
      } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('filmes');
  }
};