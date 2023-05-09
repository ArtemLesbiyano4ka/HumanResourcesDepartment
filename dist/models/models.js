"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeCode = exports.Basket = exports.PersonnelActivities = exports.MessegeFromUser = exports.Allmessage = exports.User = void 0;
var database_1 = __importDefault(require("../database/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
    fullname: { type: sequelize_1.default.STRING },
    employmentDate: { type: sequelize_1.default.INTEGER },
    workExperience: { type: sequelize_1.default.INTEGER },
    salaryperhour: { type: sequelize_1.default.INTEGER },
    workexperience: { type: sequelize_1.default.STRING },
    desiredincome: { type: sequelize_1.default.INTEGER },
    prospects: { type: sequelize_1.default.STRING },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var OneTimeCode = database_1.default.define("onetimecode", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: sequelize_1.default.INTEGER },
});
exports.OneTimeCode = OneTimeCode;
var PersonnelActivities = database_1.default.define("personnelActivities", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: false, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    data: { type: sequelize_1.default.STRING, defaultValue: "Undefined" },
});
exports.PersonnelActivities = PersonnelActivities;
var Allmessage = database_1.default.define("allmessage", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.Allmessage = Allmessage;
var MessegeFromUser = database_1.default.define("messegeFromUser", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.MessegeFromUser = MessegeFromUser;
User.hasMany(MessegeFromUser);
MessegeFromUser.belongsTo(User);
User.hasOne(Basket);
Basket.belongsTo(User);
