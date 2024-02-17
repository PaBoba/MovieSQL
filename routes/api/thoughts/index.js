const express = require("express");
const router = express.Router();

const reactions = router.get("./reactions/index");
router.use("/thoughts/:thoughtId", reactions);

module.exports = router;
