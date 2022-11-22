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

module.exports = { getBlogs };
