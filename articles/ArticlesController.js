import express from "express";
export const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Articles route");
});

router.get("/admin/articles/new", (req, res) => {
  res.send("Route for new articles creation");
});
