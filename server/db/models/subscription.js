'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {

    static associate({ User, Chat }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Chat, { foreignKey: "chat_id" });
    }
  }
  Subscription.init({
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
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};