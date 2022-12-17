const blogService = require("../services/blogService");
const errorGenerator = require("../utils/errorGenerator");

async function getBlogs(req, res) {
  try {
    const blogs = await blogService.getBlogs();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getBlog(req, res) {
  try {
    console.log(req);
    const blogs = await blogService.getBlogs();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function postBlog(req, res) {
  try {
    const { name, subject, content } = req.body;
    if (!name || !subject || !content) {
      return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });
    }
    await blogService.postBlog(name, subject, content);

    res.status(200);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { getBlogs, getBlog, postBlog };
