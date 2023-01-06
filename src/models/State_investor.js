import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const State_investor = sequelize.define(
  "state_investor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
