import { Sequelize } from "sequelize";
import connection from "../database/database";

export const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    alowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    alowNull: fale,
  },
});
