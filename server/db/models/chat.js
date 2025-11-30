'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate({ Message, Subscription }) {
      this.hasMany(Subscription, { foreignKey: "chat_id" });
      this.hasMany(Message, { foreignKey: "chat_id" });
    }
  }
  Chat.init({
      type: {
        type: DataTypes.TEXT
      },
      logo: {
        type: DataTypes.TEXT
      },
      time: {
        type: DataTypes.BIGINT
      },
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};