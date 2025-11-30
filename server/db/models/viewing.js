'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viewing extends Model {
    static associate({ User, Message }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.belongsTo(Message, { foreignKey: "message_id" });
    }
  }
  Viewing.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',

    },
    message_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Messages',
        key: 'id',
      },
      onDelete: 'CASCADE',

    },
    time: {
      type: DataTypes.BIGINT
    },
    data: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Viewing',
  });
  return Viewing;
};