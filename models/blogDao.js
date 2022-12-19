const { PrismaClient } = require("@prisma/client");
const moment = require("moment");

const prisma = new PrismaClient();

async function getBlogs() {
  return await prisma.blog.findMany();
}

async function getBlog(id) {
  return await prisma.blog.findUnique({ where: { id } });
}

async function postBlog(text) {
  return await prisma.blog.create({
    data: { text, createdAt: moment().format("YYYY-MM-DD HH:mm") },
  });
}

module.exports = { getBlogs, getBlog, postBlog };
