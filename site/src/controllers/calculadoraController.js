var usuarioModel = require("../models/calculadoraModel");

function calcular(req, res){
    var idUsuario = req.body.idServer;
    var peso = req.body.pesoServer;
    var altura = req.body.alturaServer;


    if(idUsuario == undefined){
        res.status(400).send("");
    } else if(peso == undefined){
        res.status(400).send("");
    } else if(altura == undefined){
        res.status(400).send("");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.calcular(peso, altura, idUsuario)
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
    calcular
};