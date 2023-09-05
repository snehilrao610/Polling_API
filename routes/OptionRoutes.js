const express = require("express");
const router = express.Router();
const OptionController = require("../controllers/OptionController");

router.post("/create/:id", OptionController.createOption);
router.post("/add_vote/:id", OptionController.addVote);
router.post("/delete/:id", OptionController.deleteOption);

module.exports = router;
