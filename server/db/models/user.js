'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Call, Subscription, Message, Like, DisLike, Viewing }) {
      this.hasMany(Call, { foreignKey:  "user_id"});
      this.hasMany(Subscription, { foreignKey: "user_id" });
      this.hasMany(Message, { foreignKey: "user_id" });
      this.hasMany(Like, { foreignKey: "user_id" });
      this.hasMany(DisLike, { foreignKey: "user_id" });
      this.hasMany(Viewing, { foreignKey: "user_id" });
    }
  }
  User.init({
      name: {
        type: DataTypes.TEXT
      },
      password: {
        type: DataTypes.TEXT
      },
      corpPass: {
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
    modelName: 'User',
  });
  return User;
};