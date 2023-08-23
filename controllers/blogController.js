const Blog = require("../models/blog.js");
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "Home", blogs });
    })
    .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
  res.render("blogs", { title: "blog" });
};
//To create blogs
async function createBlog(obj) {
  const blog1 = new Blog(obj);
  return await blog1.save();
}

const blog_create_post = (req, res) => {
  const blog = createBlog(req.body)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  res.redirect("/");
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => res.render("show", { title: `${blog.title}`, blog }))
    .catch((err) => res.status(404).render("404", { title: "404" }));
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => res.json({ redirect: "/" }))
    .catch((err) => res.status(404).render("404", { title: "404" }));
};

module.exports = {
  blog_index,
  blog_create_post,
  blog_details,
  blog_delete,
  blog_create_get,
};
