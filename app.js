const express = require("express");
const app = express();
const mongoose = require("mongoose");

//set your database url here!
const dbURI = "";
const blogRoutes = require("./routes/blogRoutes.js");
mongoose.connect(dbURI).catch((err) => console.log(err));

app.set("view engine", "ejs");
app.listen(3000);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
