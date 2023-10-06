import express from "express";
import bodyParser from "body-parser";
import { connection } from "./database/database.js";
import { router as categoriesController } from "./categories/CategoriesController.js";
import { router as articlesController } from "./articles/ArticlesController.js";

const app = express();

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
  .authenticate()
  .then(() => console.log("Connection established successfully"))
  .catch((err) => console.log(err));

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3333, () => console.log("Running: http://localhost:3333 🚀\n"));
