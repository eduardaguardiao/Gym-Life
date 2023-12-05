var database = require("../database/config");

function calcular(peso, altura, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function calcular(): ", peso, altura, idUsuario);


    var instrucao = `
      INSERT INTO imc (peso, altura, fkUser) VALUES ('${peso}', '${altura}', '${idUsuario}')`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


 
module.exports = {
   calcular
};