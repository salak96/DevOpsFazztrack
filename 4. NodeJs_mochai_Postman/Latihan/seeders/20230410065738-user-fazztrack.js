'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
        firstname: 'leonardo',
        alamat: 'Jl. Raya Cikarang',
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      
      {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
