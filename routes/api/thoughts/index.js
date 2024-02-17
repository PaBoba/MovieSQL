const express = require("express");
const router = express.Router();

const newThought = require("./new-thought");
const getThoughts = require("./get-thoughts");
const getById = require("./get-by-id");
const updateThought = require("./update-thought");
const deleteThought = require("./delete-thought");

router.use("/thoughts", newThought);
router.use("/thoughts", getThoughts);
router.use("/thoughts", getById);
router.use("/thoughts", updateThought);
router.use("/thoughts", deleteThought);

const reactions = router.get("./reactions/index");
router.use("/thoughts/:thoughtId", reactions);

module.exports = router;
