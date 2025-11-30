'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ Message, User }) {
      this.belongsTo(Message, { foreignKey: "message_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Like.init({
    message_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Messages',
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
    modelName: 'Like',
  });
  return Like;
};