import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Document_project = sequelize.define("document_project", {
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
