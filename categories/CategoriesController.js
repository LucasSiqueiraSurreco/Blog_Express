import express from "express";
import { Category } from "./Category.js";
import slugify from "slugify";

export const router = express.Router();

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
  let { title } = req.body;
  if (title != undefined) {
    Category.create({
      title: title,
      slug: slugify(title),
    }).then(() => res.redirect("/"));
  } else {
    res.redirect("/admin/categories/new");
  }
});
