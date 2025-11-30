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
    user_id: {
      type: DataTypes.INTEGER
    },
    chat_id: {
      type: DataTypes.INTEGER
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