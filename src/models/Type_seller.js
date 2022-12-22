import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Type_seller = sequelize.define(
  "type_seller",
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
