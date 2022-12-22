import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Investor = sequelize.define("investor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  names: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  lastnames: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
  },
  document: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  investment_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  investment_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  investment_earning: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  time_in_months: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profitability: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  postpoment_in_months: {
    type: DataTypes.INTEGER,
  },
  postpoment_eaning: {
    type: DataTypes.DECIMAL(10, 2),
  },
  account_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  voucher_capture: {
    type: DataTypes.STRING,
  },
  investment_contract: {
    type: DataTypes.STRING,
  },
  tax: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});
