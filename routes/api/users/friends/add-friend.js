const express = require("express");
const router = express.Router();
const { addFriend } = require("../../../../controllers/friend");

router.post("/", addFriend);

module.exports = router;
