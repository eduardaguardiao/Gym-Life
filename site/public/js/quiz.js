const questions = [
    {
        question: 'Qual é o nome do hormônio liberado durante o exercício físico que melhora o humor?',
        answers: [
            {text: ' A) Insulina', correct: false},
            {text: ' B) Cortisol', correct: false},
            {text: ' C) Endorfina', correct: true},
            {text: ' D) Testosterona', correct: false}
        ] 
    },

    {
        question: 'Qual músculo é principalmente trabalhado durante um agachamento?',
        answers: [
            {text: ' A) Glúteo', correct: false},
            {text: ' B) Quadríceps', correct: true},
            {text: ' C) Bíceps', correct: false},
            {text: ' D) Peitoral', correct: false}
        ] 
    },

    {
        question: 'Qual é o nome do exercício que trabalha os músculos das costas e dos bíceps através de uma puxada vertical em direção ao queixo?',
        answers: [
            {text: ' A) Puxada alta', correct: true},
            {text: ' B) Tríceps pulley', correct: false},
            {text: ' C) Desenvolvimento', correct: false},
            {text: ' D) Flexão', correct: false}
        ] 
    },

    
    {
        question: 'Qual desses exercícios não é para a perna?',
        answers: [
            {text: 'A) Afundo', correct: false},
            {text: 'B) Pulldown', correct: true},
            {text: 'C) Búlgaro', correct: false},
            {text: 'D) Agachamento', correct: false}
        ] 
    },

    {
        question: 'Qual músculo tem o apelido de "cebola?"',
        answers: [
            {text: 'A) Trapézio', correct: false},
            {text: 'B) Deltoides', correct: false},
            {text: 'C) Glúteo', correct: false},
            {text: 'D) Ombro', correct: true}
        ] 
    },

    {
        question: 'Quais músculos são mais trabalhados ao usar uma máquina de remo?',
        answers: [
            {text: 'A) Costas, ombros e pernas', correct: true},
            {text: 'B) Deltoides', correct: false},
            {text: 'C) Abdominais e peitorais', correct: false},
            {text: 'D) Bíceps e tríceps', correct: false},
        ] 
    },

    {
        question: 'Qual é o principal objetivo do uso de uma máquina elíptica?',
        answers: [
            {text: 'A) Melhoria da flexibilidade', correct: false},
            {text: 'B) Fortalecimento dos braços', correct: false},
            {text: 'C) Exercício cardiovascular', correct: true},
            {text: 'D) Treinamento de resistência', correct: false}
        ] 
    },

    {
        question: 'Qual é a origem da proteína albumina?',
        answers: [
            {text: 'A) Carne vermelha', correct: false},
            {text: 'B) Ovo', correct: true},
            {text: 'C) Leite', correct: false},
            {text: 'D) Soja', correct: false}
        ] 
    },

    {
        question: 'Qual composto estimulante é encotrado em pré treinos?',
        answers: [
            {text: 'A) Creatina', correct: false},
            {text: 'B) Beta-alanina', correct: false},
            {text: 'C) Cafeína', correct: true},
            {text: 'D) Arginina', correct: false}
        ] 
    },

    {
        question: 'O que é periodização?',
        answers: [
            {text: 'A) Variação constante de exercícios', correct: false},
            {text: 'B) Treino exclusivo para atletas', correct: false},
            {text: 'C) Treino concentrado em uma única parte do corpo', correct: false},
            {text: 'D) Divisão de treino em períodos distintos de intensidades', correct: true},
        ] 
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function iniciarQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo"
    exibirQuestion();
}

function exibirQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selecionarResposta);
    });
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selecionarResposta(e){
    const selectdBtn = e.target;
    const isCorrect = selectdBtn.dataset.correct === 'true'
    if(isCorrect){
        selectdBtn.classList.add("correto")
        score++;
    }
    else {
        selectdBtn.classList.add("incorreto")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correto")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `
    Pontuação: ${score} / ${questions.length}!`;
    nextButton.innerHTML = `Jogar Novamente`;
    nextButton.style.display = 'block';
    score
    gerarScore()
}

function handlenNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        exibirQuestion();
    }
    else{
        showScore();
    }
};


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handlenNextButton()
    }
    else {
         iniciarQuiz()
    }
});

iniciarQuiz();

function gerarScore() {
       
    var idVar = sessionStorage.ID_USUARIO;
    var scoreVar = score  

    fetch("/quiz/showScore", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idServer: idVar, 
            scoreServer: scoreVar
        })
    }).then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        // alert(`Cadastro realizado com sucesso!`)
        
        // setTimeout(() => {
        //   window.location = "login.html";
        // }, 2000);

        limparFormulario();
        // finalizarAguardar();
      } else {
        // throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });

  return false;

}

// contar a quantidade de cada usuario