const express = require("express");
const getAllCommentsController = require("../controllers/getAllComments");
const {
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/getComment");

const router = express.Router();

router.get("/getAllComments", getAllCommentsController.getAllComments);
router.post("/updateComment", updateComment);
router.put("/deleteComment", deleteComment);

module.exports = router;
