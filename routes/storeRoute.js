const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

// GET
router.get("/", storeController.getStore);

// POST
router.post("/", storeController.postStore);

// PUT

// DELETE
router.delete("/", storeController.delStore);

module.exports = router;
