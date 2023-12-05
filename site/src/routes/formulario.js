var express = require("express");
var router = express.Router();

var formularioController = require ("../controllers/formularioController");

// recebendo os dados do html 
router.post("/enviar", function (req, res) {
    formularioController.enviar(req, res);
});

module.exports = router;