const express = require("express");
const getCommentsController = require("../controllers/getComment");

const router = express.Router();

router.post("/getComments", getCommentsController.getComments);

module.exports = router;
