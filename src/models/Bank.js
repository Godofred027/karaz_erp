import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Bank = sequelize.define(
  "bank",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
