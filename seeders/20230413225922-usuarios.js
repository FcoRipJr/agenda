'use strict';
const bcrypt = require("bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const salt = await  bcrypt.genSalt(12)
    const password = await bcrypt.hash('123',salt)
     await queryInterface.bulkInsert('usuarios', [{
        nome: 'Administrador',
        email: 'admin@admin.com',
        senha: password,
        data_nascimento: '2001-01-01',
        status: 'A',
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
