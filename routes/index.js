const express = require("express");
const router = express.Router();

const userRoutes = require("./api/users/index");
const thoughtRoutes = require("./api/thoughts/index");

router.use("/api", userRoutes);
router.use("/api", thoughtRoutes);

module.exports = router;
