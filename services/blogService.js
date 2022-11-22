const blogDao = require("../models/blogDao");

async function getBlogs() {
  return await blogDao.getBlogs();
}

module.exports = { getBlogs };
