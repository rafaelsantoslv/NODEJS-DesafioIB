'use strict';

const sequelize = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    console.log('iniciando migration');
    await queryInterface.createTable(
      'Chamadas',
      {
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
        chamadas_atendimento_pa: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chamadas_abandono_fila: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chamadas_falha_operadora: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chamadas_atendimento_humano: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chamadas_atendimento_maquina: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chamadas_abandono_pre_fila: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        chamadas_nao_atendida: {
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
      },
      console.log('começando index'),
      // {
      //   indexes: [
      //     {
      //       name: 'idx_cliente',
      //       using: 'BTREE',
      //       fields: ['cliente'],
      //     },
      //     {
      //       name: 'idx_data',
      //       using: 'BTREE',
      //       fields: ['data'],
      //     },
      //   ],
      // },
    );
    // await queryInterface.addIndex('chamadas', [
    //   'cliente',
    //   {
    //     // using: ,
    //     name: 'unique_cliente',
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chamadas');
  },
};
