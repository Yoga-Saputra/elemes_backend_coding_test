'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values: ['free', 'premium'],
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM,
        values: ['all-level', 'beginner', 'intermediate', 'advance', 'populer'],
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('courses');
  }
};
