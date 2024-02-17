const express = require("express");
const router = express.Router();
const { createThought } = require("../../../controllers/thought");

router.post("/", createThought);

module.exports = router;
