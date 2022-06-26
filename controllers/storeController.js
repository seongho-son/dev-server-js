const storeService = require("../services/storeService");
const errorGenerator = require("../utils/errorGenerator");

async function postStore(req, res) {
  try {
    console.log("controller postStore start");

    const { name, type } = req.body;
    if (!name || !type) {
      return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });
    }
    await storeService.postStore(name, type);

    res.status(200).json({ message: "SUCCESS" });
  } catch (err) {
    console.log("controller postStore err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getStore(req, res) {
  try {
    console.log("controller getStore start");

    const store = await storeService.getStore();

    res.status(200).json({ message: "SUCCESS", store });
  } catch (err) {
    console.log("controller getStore err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function delStore(req, res) {
  try {
    console.log("controller delStore start");

    const { id } = req.body;
    if (!id) {
      return await errorGenerator({ statusCode: 400, message: "KEY_ERROR" });
    }
    await storeService.delStore(id);

    res.status(200).json({ message: "SUCCESS" });
  } catch (err) {
    console.log("controller delStore err");
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}
module.exports = { postStore, getStore, delStore };
