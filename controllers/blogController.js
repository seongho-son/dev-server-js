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
    const { id } = req.params;
    if (!id) return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });

    const blog = await blogService.getBlog(Number(id));
    res.status(200).json(blog);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function postBlog(req, res) {
  try {
    const { text } = req.body;
    if (!text) return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });

    await blogService.postBlog(text);

    res.status(200);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { getBlogs, getBlog, postBlog };
