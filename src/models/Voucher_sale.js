import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Voucher_sale = sequelize.define(
  "voucher_sale",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    url_document: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
