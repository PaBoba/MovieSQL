const express = require("express");
const router = express.Router();
const { removeFriend } = require("../../../../controllers/friend");

router.delete("/:friendId", removeFriend);

module.exports = router;
