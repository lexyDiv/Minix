'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitation extends Model {
    static associate({ Chat }) {
      this.belongsTo(Chat, { foreignKey: "chat_id" });
    }
  }
  Invitation.init({
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Chats',
        key: 'id',
      },
      onDelete: 'CASCADE',

    },
    time: {
      type: DataTypes.BIGINT
    },
    otherUser_id: {
      type: DataTypes.INTEGER
    },
    targetChat_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Invitation',
  });
  return Invitation;
};