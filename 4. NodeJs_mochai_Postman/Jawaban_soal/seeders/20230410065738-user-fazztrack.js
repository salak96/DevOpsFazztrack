'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
        firstname: 'leonardo',
        alamat: 'Jl. Raya Cikarang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'lambang',
        alamat: 'Jl. Raya klaten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      firstname: 'bambang',
      alamat: 'Jl. eka karya',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
       firstname: 'budi',
       alamat: 'Jl. Raya cikarang',
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {
    firstname: 'aldio',
    alamat: 'mayang',
    createdAt: new Date(),
    updatedAt: new Date()
    }
    ],
      
      {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
