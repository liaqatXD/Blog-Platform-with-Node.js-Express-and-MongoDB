const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: String,
    snippet: String,
    body: String,
  },
  { collection: "blogs", timestamps: true }
);

module.exports = new mongoose.model("blogs", blogSchema);
