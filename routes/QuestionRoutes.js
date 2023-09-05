const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/QuestionController");

router.post("/", QuestionController.show);
router.post("/create", QuestionController.create);
router.post("/:id", QuestionController.view);
router.post("/delete/:id", QuestionController.deleteQuestion);

module.exports = router;
