import { Sequelize } from "sequelize";
import connection from "../database/database";

export const Category = connection.define("categories", {
  title: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    alowNull: false,
  },
});
