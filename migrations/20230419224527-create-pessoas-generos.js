'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pessoas_generos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pessoas_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'pessoas'
          },
          key: 'id',
        },
      },
      generos_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'generos'
          },
          key: 'id',
        },
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
    await queryInterface.dropTable('pessoas_generos');
  }
};