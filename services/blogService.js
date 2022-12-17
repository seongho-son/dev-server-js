const blogDao = require("../models/blogDao");

async function getBlogs() {
  return await blogDao.getBlogs();
}

async function postBlog(name, subject, content) {
  return await blogDao.postBlog(name, subject, content);
}

module.exports = { getBlogs, postBlog };
