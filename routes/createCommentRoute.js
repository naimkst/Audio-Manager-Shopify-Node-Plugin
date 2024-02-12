const express = require("express");
const createCommnetController = require("../controllers/createComment");

const router = express.Router();

router.post("/createComment", createCommnetController.createComment);

module.exports = router;
