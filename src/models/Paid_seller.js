import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Paid_seller = sequelize.define("paid_seller", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  commission: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  amount_payable: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  amount_paid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  amount_pending: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});
