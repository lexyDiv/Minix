'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ Chat, User, Viewing }) {
      this.belongsTo(Chat, { foreignKey: "chat_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(Viewing, { foreignKey: "message_id" });
    }
  }
  Message.init({
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Chats',
        key: 'id',
      },
      onDelete: 'CASCADE',

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',

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