import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Client = sequelize.define("client", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  document: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});
