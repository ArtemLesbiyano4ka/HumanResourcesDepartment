/** @format */

import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  fullname: { type: DataTypes.STRING },
  employmentDate: { type: DataTypes.INTEGER },
  workExperience: { type: DataTypes.INTEGER },
  salaryperhour: { type: DataTypes.INTEGER },
  workexperience: { type: DataTypes.STRING },
  desiredincome: { type: DataTypes.INTEGER },
  prospects: { type: DataTypes.STRING },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const OneTimeCode = DataBase.define("onetimecode", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.INTEGER },
});

const PersonnelActivities = DataBase.define("personnelActivities", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: false },
  description: { type: DataTypes.STRING },
  data: { type: DataTypes.STRING, defaultValue: "Undefined" },
});

const Allmessage = DataBase.define("allmessage", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const MessegeFromUser = DataBase.define("messegeFromUser", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(MessegeFromUser);
MessegeFromUser.belongsTo(User);

User.hasOne(Basket);
Basket.belongsTo(User);

export {
  User,
  Allmessage,
  MessegeFromUser,
  PersonnelActivities,
  Basket,
  OneTimeCode,
};
