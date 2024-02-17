const express = require("express");
const router = express.Router();

const newUser = require("./new-user");
const getUsers = require("./get-users");
const getById = require("./get-by-id");
const updateUser = require("./update-user");
const deleteUser = require("./delete-user");

router.use("/users", newUser);
router.use("/users", getUsers);
router.use("/users", getById);
router.use("/users", updateUser);
router.use("/users", deleteUser);

const friends = router.get("./friends/index");
router.use("/users/:userId", friends);

module.exports = router;
