'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.TEXT,
    pass: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    status: DataTypes.TEXT,
    type: DataTypes.TEXT,
    data: DataTypes.TEXT,
    time: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};