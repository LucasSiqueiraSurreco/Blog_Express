import express from "express";
export const router = express.Router();

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});
