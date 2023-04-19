'use strict';
const { pessoas_generos } = require("../models/")

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
    await pessoas_generos.bulkCreate([
      { generos_id: 1, pessoas_id:1},
      { generos_id: 1, pessoas_id:2},
      { generos_id: 2, pessoas_id:1}
    ])
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
