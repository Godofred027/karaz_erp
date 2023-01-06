import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Document_sale = sequelize.define("document_sale", {
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
