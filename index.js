import express from "express";
import bodyParser from "body-parser";

const app = express();

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3333, () => console.log("http://localhost:3333"));
