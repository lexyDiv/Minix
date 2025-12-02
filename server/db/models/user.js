'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Viewing, Like, DisLike, Message, Subscription, Seeng }) {
      this.hasMany(Viewing, { foreignKey: "user_id" });
      this.hasMany(Like, { foreignKey: "user_id" });
      this.hasMany(DisLike, { foreignKey: "user_id" });
      this.hasMany(Message, { foreignKey: "user_id" });
      this.hasMany(Subscription, { foreignKey: "user_id" });
      //  this.hasMany(Seeng, { foreignKey: "user_id" });
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT
    },
    pass: {
      type: DataTypes.TEXT
    },
    logo: {
      type: DataTypes.TEXT
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
    time: {
      type: DataTypes.BIGINT
    },
    socketId: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};