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
        type: DataTypes.INTEGER
      },
      message_id: {
        type: DataTypes.INTEGER
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