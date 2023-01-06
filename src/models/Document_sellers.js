import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Document_selles = sequelize.define("document_selles", {
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
