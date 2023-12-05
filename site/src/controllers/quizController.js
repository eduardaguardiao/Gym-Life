var usuarioModel = require("../models/quizModel");

function showScore(req, res){
    var idUsuario = req.body.idServer;
    var score = req.body.scoreServer;


    if(idUsuario == undefined){
        res.status(400).send("");
    } else if(score == undefined){
        res.status(400).send("");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.showScore(score, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n...",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
 
module.exports = {
    showScore 
};