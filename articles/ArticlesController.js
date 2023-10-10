import express from "express";
export const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Articles route");
});

router.get("/admin/articles/new", (req, res) => {
  res.render("admin/articles/new");
});
