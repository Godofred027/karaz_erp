import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Seller = sequelize.define("seller", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  names: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  last_names: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  document: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING(255),
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  account_number: {
    type: DataTypes.STRING(50),
  },
});
