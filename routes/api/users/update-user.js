const express = require("express");
const router = express.Router();
const { updateUser } = require("../../../controllers/user");

router.put("/:id", updateUser);

module.exports = router;
