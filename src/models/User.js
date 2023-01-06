import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Role } from "./Role.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    names: {
      type: DataTypes.STRING(80),
    },
    lastnames: {
      type: DataTypes.STRING(80),
    },
    date_of_birth: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    profile_picture: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
  }
);

Role.hasMany(User, { foreignKey: "role_id", sourceKey: "id" });
User.belongsTo(Role, { foreignKey: "role_id", targetId: "id" });
