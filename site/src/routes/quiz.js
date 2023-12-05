var express = require("express");
var router = express.Router();

var quizController = require ("../controllers/quizController");

// recebendo os dados do html 
router.post("/showScore", function (req, res) {
    quizController.showScore(req, res);
});

module.exports = router;