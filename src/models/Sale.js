import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Sale = sequelize.define("sale", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  amount_paid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  payment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  last_payment_date: {
    type: DataTypes.DATE,
  },
  next_payment_date: {
    type: DataTypes.DATE,
  },
  coutes: {
    type: DataTypes.INTEGER,
  },
  coutes_paid: {
    type: DataTypes.INTEGER,
  },
});
