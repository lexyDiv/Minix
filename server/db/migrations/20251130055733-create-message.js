'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chat_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Chats',
        key: 'id',
      },
      onDelete: 'CASCADE',
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      },
      data: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      more: {
        type: Sequelize.TEXT
      },
      answer: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Messages');
  }
};