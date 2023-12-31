import { Sequelize } from "sequelize";
import { connection } from "../database/database.js";
import { Category } from "../categories/Category.js";

export const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article);
Article.belongsTo(Category);

Article.sync({ force: false });
