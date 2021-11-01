'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        role: 'admin',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'user',
        role: 'user',
        password: await bcrypt.hash('user123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
