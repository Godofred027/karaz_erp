import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Document_investor = sequelize.define("document_investor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  url_document: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
