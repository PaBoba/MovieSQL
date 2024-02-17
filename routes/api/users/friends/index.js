const express = require("express");
const router = express.Router();

const addFriend = require("./add-friend");
const deleteFriend = require("./delete-friend");

router.use("/friends", addFriend);
router.use("/friends", deleteFriend);

module.exports = router;
