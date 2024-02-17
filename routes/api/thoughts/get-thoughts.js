const express = require("express");
const router = express.Router();
const { getAllThoughts } = require("../../../controllers/thought");

router.get("/", getAllThoughts);

module.exports = router;
