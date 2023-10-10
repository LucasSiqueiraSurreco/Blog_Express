import express from "express";
export const router = express.Router();
import { Category } from "../categories/Category.js";
import { Article } from "./Article.js";
import slugify from "slugify";

router.get("/articles", (req, res) => {
  res.send("Articles route");
});

router.get("/admin/articles/new", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new", { categories: categories });
  });
});

router.post("/articles/save", (req, res) => {
  let { title, body, category } = req.body;

  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: category,
  });
});
