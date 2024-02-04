'use strict';

const sequelize = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chamadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chamadas_total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      chamadas_telefone_incorreto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ocorrencias_total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ocorrencias_sem_contato: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ocorrencias_com_contato: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ocorrencias_abordagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ocorrencias_fechamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chamadas');
  },
};
