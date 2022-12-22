import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Type_envoice = sequelize.define(
  "type_envoice",
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
