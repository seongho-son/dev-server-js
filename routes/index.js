const express = require("express");
const router = express.Router(); // express 라우팅 기능을 사용하기 위해서 router 객체가 필요합니다.

const todoRoute = require("./todoRoute");
const storeRoute = require("./storeRoute");
const blogRoute = require("./blogRoute");

router.use("/todo", todoRoute);
router.use("/store", storeRoute);
router.use("/blog", blogRoute);

module.exports = router; // 이렇게 내보낸 router 는 express app 의 미들웨어로 사용됩니다.
