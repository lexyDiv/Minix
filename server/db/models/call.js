'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Call extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Call.init({
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
    targetUser_id: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.TEXT
    },
    data: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Call',
  });
  return Call;
};