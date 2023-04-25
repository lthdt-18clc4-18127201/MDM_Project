const express = require("express");
const router = express.Router();

const hotelsController = require("../controllers/HotelsController");

router.use("/", hotelsController.index);

module.exports = router;
