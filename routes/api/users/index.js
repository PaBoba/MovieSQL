const express = require("express");
const router = express.Router();

const friends = router.get("./friends/index");
router.use("/users/:userId", friends);

module.exports = router;
