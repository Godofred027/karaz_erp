import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Role = sequelize.define(
  "role",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
