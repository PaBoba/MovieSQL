const express = require("express");
const router = express.Router();
const { deleteReaction } = require("../../../../controllers/reaction");

router.delete("/:reactionId", deleteReaction);

module.exports = router;
