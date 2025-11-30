'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Chat, User, Like, DisLike, VieWing }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(VieWing, { foreignKey:  "message_id" });
      this.belongsTo(Chat, { foreignKey: "chat_id" });
      this.hasMany(Like, { foreignKey: "message_id" });
      this.hasMany(DisLike, { foreignKey: "message_id" });
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
      data: {
        type: DataTypes.TEXT
      },
      image: {
        type: DataTypes.TEXT
      },
      more: {
        type: DataTypes.TEXT
      },
      answer: {
        type: DataTypes.INTEGER
      },
      time: {
        type: DataTypes.BIGINT
      },
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};