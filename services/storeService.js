const storeDao = require("../models/storeDao");

async function postStore(name, type) {
  console.log("service postStore start");

  return await storeDao.postStore(name, type);
}

async function getStore() {
  console.log("service getStore start");

  return await storeDao.getStore();
}

async function delStore(id) {
  console.log("service delStore start");

  return await storeDao.delStore(id);
}

module.exports = { postStore, getStore, delStore };
