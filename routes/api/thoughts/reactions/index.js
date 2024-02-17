const express = require("express");
const router = express.Router();

const addReaction = require("./add-reaction");
const deleteReaction = require("./delete-reaction");

router.use("/reactions", addReaction);
router.use("/reactions", deleteReaction);

module.exports = router;
