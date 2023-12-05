var express = require("express");
var router = express.Router();

var analyticsController = require("../controllers/analyticsController");


router.get("/exibirTotalPessoas", function (req, res) {
    analyticsController.buscarPessoasEmTempoReal(req, res);
})

module.exports = router; 