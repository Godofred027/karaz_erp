import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const State_paid_seller = sequelize.define(
  "state_paid_seller",
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
