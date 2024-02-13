const express = require("express");
const audioController = require("../controllers/audioController");

const router = express.Router();

router.post("/audio", audioController.Create);
router.get("/audio", audioController.getAll);
router.put("/audio", audioController.Delete);
router.post("/audio/file", audioController.GetById);

module.exports = router;
