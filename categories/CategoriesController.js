import express from "express";
export const router = express.Router();

router.get("/categories", (req, res) => {
  res.send("Categories route");
});

router.get("/admin/categories/new", (req, res) => {
  res.send("Route for new categories creation");
});
