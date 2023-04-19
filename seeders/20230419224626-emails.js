'use strict';
const { emails } = require("../models/")

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

    await emails.bulkCreate([
      { email: 'joao@mail.com', pessoas_id:1},
      { email: 'maria@mail.com', pessoas_id:2},
      { email: 'jao@mail.com', pessoas_id:1}
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
