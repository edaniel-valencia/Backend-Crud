"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../database/conecction"));
exports.User = conecction_1.default.define("user", {
    Uid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Uname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Ulastname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Uemail: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Uwhatssap: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Ustatus: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Ucreated: { type: sequelize_1.DataTypes.DATE, field: 'Ucreated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
}, {
    timestamps: false,
    paranoid: false
});
