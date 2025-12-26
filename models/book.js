import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const book = sequelize.define(
  "book",
  {
    isbn: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "books",     // 🔥 MUST match MySQL table
    timestamps: false,      // 🔥 avoids createdAt/updatedAt errors
  }
);

export default book;
