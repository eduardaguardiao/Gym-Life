var usuarioModel = require("../models/formularioModel");

function enviar(req, res){
    var idUsuario = req.body.idServer;
    var sugestao = req.body.sugestaoServer


    if(idUsuario == undefined){
        res.status(400).send("");
    } else if(sugestao == undefined){
        res.status(400).send("");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.enviar(idUsuario, sugestao)
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
    enviar
};