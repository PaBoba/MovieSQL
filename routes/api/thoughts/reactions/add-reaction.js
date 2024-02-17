const express = require("express");
const router = express.Router();
const { addReaction } = require("../../../../controllers/reaction");

router.post("/", addReaction);

module.exports = router;
