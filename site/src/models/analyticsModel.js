var database = require("../database/config")

function buscarPessoasEmTempoReal() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",)
    var instrucao = `
    select pontuacao, COUNT(pontuacao) as quantidade
    from quiz
    where pontuacao between 1 and 10
    group by pontuacao order by pontuacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarPessoasEmTempoReal
}