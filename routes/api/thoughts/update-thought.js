const express = require("express");
const router = express.Router();
const { updateThought } = require("../../../controllers/thought");

router.put("/:id", updateThought);

module.exports = router;
