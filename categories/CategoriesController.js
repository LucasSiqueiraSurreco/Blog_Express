import express from "express";
import { Category } from "./Category.js";
import slugify from "slugify";

export const router = express.Router();

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.get("/admin/categories", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/categories/index", {
      categories: categories,
    });
  });
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

router.post("/categories/delete", (req, res) => {
  let { id } = req.body;
  if (id != undefined) {
    if (!isNaN(id)) {
      Category.destroy({
        where: { id: id },
      }).then(() => {
        res.redirect("/admin/categories");
      });
    } else {
      res.redirect("/admin/categories");
    }
  } else {
    redirect("/admin/categories");
  }
});
