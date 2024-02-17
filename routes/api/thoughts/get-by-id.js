const express = require("express");
const router = express.Router();
const { getThoughtById } = require("../../../controllers/thought");

router.get("/:id", getThoughtById);

module.exports = router;
