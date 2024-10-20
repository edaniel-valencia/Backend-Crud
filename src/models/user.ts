import { DataTypes } from "sequelize";
import sequelize from "../database/conecction";


export const User = sequelize.define("user", {
    Uid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Uname: {type: DataTypes.STRING, allowNull: false},
    Ulastname: {type: DataTypes.STRING, allowNull: false},
    Uemail: {type: DataTypes.STRING, allowNull: false},
    Uwhatssap: {type: DataTypes.STRING, allowNull: false},
    Ustatus: {type: DataTypes.STRING, allowNull: false},
    Ucreated: {type: DataTypes.DATE, field: 'Ucreated', defaultValue: DataTypes.NOW, allowNull: false},

}, {
    timestamps: false,
    paranoid: false
}
)