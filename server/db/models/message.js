'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ Chat, User }) {
      this.belongsTo(Chat, { foreignKey: "chat_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Message.init({
      chat_id: {
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.INTEGER
      },
      time: {
        type: DataTypes.BIGINT
      },
      type: {
        type: DataTypes.TEXT
      },
      status: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.TEXT
      },
      data: {
        type: DataTypes.TEXT
      },
      answear: {
        type: DataTypes.TEXT
      },
      commentOnMessageId: {
        type: DataTypes.INTEGER
      },
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};