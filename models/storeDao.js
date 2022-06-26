const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function postStore(name, type) {
  console.log("dao postStore start");

  return await prisma.stores.create({
    data: {
      name,
      type,
    },
  });
}

async function getStore() {
  console.log("dao getStore start");
  const filterType = ["배달"];
  const count = await prisma.stores.count();
  const skip = Math.floor(Math.random() * count);

  return await prisma.stores.findFirst({
    where: {
      NOT: {
        type: {
          in: filterType,
        },
      },
    },
    take: 1,
    skip: skip,
  });
}

async function delStore(id) {
  console.log("dao delStore start");

  return await prisma.stores.delete({
    where: {
      id: id,
    },
  });
}

module.exports = { postStore, getStore, delStore };
