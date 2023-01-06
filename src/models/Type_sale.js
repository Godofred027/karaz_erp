import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Type_sale = sequelize.define(
  "type_sale",
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
