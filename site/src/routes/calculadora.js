var express = require("express");
var router = express.Router();

var calculadoraController = require ("../controllers/calculadoraController");

// recebendo os dados do html 
router.post("/calcular", function (req, res) {
    calculadoraController.calcular(req, res);
});

module.exports = router; 