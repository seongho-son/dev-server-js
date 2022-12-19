const blogDao = require("../models/blogDao");

async function getBlogs() {
  return await blogDao.getBlogs();
}

async function getBlog(id) {
  return await blogDao.getBlog(id);
}

async function postBlog(text) {
  return await blogDao.postBlog(text);
}

module.exports = { getBlogs, getBlog, postBlog };
