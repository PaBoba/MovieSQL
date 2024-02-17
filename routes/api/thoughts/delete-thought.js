const express = require("express");
const router = express.Router();
const { deleteThought } = require("../../../controllers/thought");

router.delete("/:id", deleteThought);

module.exports = router;
