'use strict';

const sequelize = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING, // Alterado para STRING
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  },
};
