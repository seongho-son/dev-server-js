const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getBlogs() {
  return await prisma.blog.findMany();
}

module.exports = { getBlogs };
