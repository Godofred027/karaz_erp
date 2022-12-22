import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Voucher_seller = sequelize.define(
  "voucher_seller",
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
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
