import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Cash_or_credit = sequelize.define(
  "cash_or_credit",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
