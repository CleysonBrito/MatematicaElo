const quizData = [
    {
        question: "Qual é o 8º múltiplo de 3?",
        options: ["24", "21", "27", "30"],
        correct: "24"
    },
    {
        question: "Qual fração representa metade de 8/16?",
        options: ["2/8", "4/8", "1/2", "8/8"],
        correct: "1/2"
    },
    {
        question: "Qual número decimal corresponde à fração 3/4?",
        options: ["0.5", "0.75", "0.25", "1.0"],
        correct: "0.75"
    },
    {
        question: "Qual é o menor múltiplo comum entre 5 e 10?",
        options: ["10", "15", "20", "25"],
        correct: "10"
    },
    {
        question: "O número 36 é múltiplo de quais números?",
        options: ["4 e 9", "5 e 7", "3 e 5", "2 e 11"],
        correct: "4 e 9"
    },
    {
        question: "A fração 6/12 é equivalente a qual destas?",
        options: ["1/2", "2/3", "3/4", "5/6"],
        correct: "1/2"
    },
    {
        question: "Qual é o dobro da fração 2/5?",
        options: ["4/5", "1/5", "3/5", "2/10"],
        correct: "4/5"
    },
    {
        question: "Quantos múltiplos de 4 existem entre 1 e 20?",
        options: ["5", "4", "6", "3"],
        correct: "5"
    },
    {
        question: "Qual é o maior número da sequência de múltiplos de 7 até 35?",
        options: ["35", "28", "42", "21"],
        correct: "35"
    },
    {
        question: "O número 0,8 é equivalente a qual fração?",
        options: ["4/5", "3/5", "7/10", "9/10"],
        correct: "4/5"
    },
    {
        question: "Quantos números naturais existem entre 10 e 20 que são múltiplos de 3?",
        options: ["3", "4", "5", "2"],
        correct: "3"
    },
    {
        question: "Qual é a fração equivalente a 25/50?",
        options: ["1/2", "3/4", "5/10", "2/3"],
        correct: "1/2"
    },
    {
        question: "O que acontece quando multiplicamos um número natural por zero?",
        options: ["O resultado é sempre zero", "O resultado é o número natural", "O resultado é infinito", "Não é possível multiplicar por zero"],
        correct: "O resultado é sempre zero"
    },
    {
        question: "Qual é a forma decimal da fração 1/4?",
        options: ["0,25", "0,5", "0,75", "1,0"],
        correct: "0,25"
    },
    {
        question: "Qual é o triplo de 1/3?",
        options: ["1", "2/3", "2", "1/2"],
        correct: "1"
    },
    {
        question: "Qual é o próximo múltiplo de 6 após 30?",
        options: ["36", "32", "38", "40"],
        correct: "36"
    },
    {
        question: "Qual número decimal corresponde à fração 5/2?",
        options: ["2,5", "1,5", "2,2", "3"],
        correct: "2,5"
    },
    {
        question: "Quantos múltiplos de 9 existem até 27?",
        options: ["3", "4", "2", "5"],
        correct: "3"
    },
    {
        question: "Qual fração representa um inteiro?",
        options: ["5/5", "5/10", "3/4", "7/8"],
        correct: "5/5"
    },
    {
        question: "Qual é o quociente de 16 dividido por 4?",
        options: ["4", "3", "2", "5"],
        correct: "4"
    },
    {
        question: "O número 45 é múltiplo de quais números?",
        options: ["5 e 9", "4 e 8", "7 e 10", "6 e 8"],
        correct: "5 e 9"
    },
    {
        question: "Qual é o maior divisor de 12?",
        options: ["12", "6", "4", "3"],
        correct: "12"
    },
    {
        question: "Quantos múltiplos de 2 existem entre 1 e 10?",
        options: ["5", "4", "6", "3"],
        correct: "5"
    },
    {
        question: "Qual fração representa três quartos?",
        options: ["3/4", "4/3", "3/8", "2/3"],
        correct: "3/4"
    },
    {
        question: "O número 81 é múltiplo de qual destes?",
        options: ["9", "7", "5", "11"],
        correct: "9"
    }
];

// Função para embaralhar perguntas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralha as perguntas ao carregar
shuffle(quizData);

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

// Constrói o quiz
function buildQuiz() {
    const output = quizData.map((item, index) => {
        const answers = item.options.map(option => `
            <label>
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            </label>
        `).join('');
        return `
            <div class="question">${index + 1}. ${item.question}</div>
            <div class="answers">${answers}</div>
        `;
    });
    quizContainer.innerHTML = output.join('');
}

// Mostra os resultados
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let correctCount = 0;
    let feedback = '';

    quizData.forEach((item, index) => {
        const userAnswer = answerContainers[index].querySelector('input:checked')?.value;
        const isCorrect = userAnswer === item.correct;

        if (isCorrect) {
            correctCount++;
            feedback += `<div class="correct-answer">Questão ${index + 1}: Correto! (${item.correct})</div>`;
        } else {
            feedback += `<div class="wrong-answer">Questão ${index + 1}: Errado! (Sua resposta: ${userAnswer || "nenhuma"} / Correta: ${item.correct})</div>`;
        }
    });

    resultsContainer.innerHTML = `
        <p>Você acertou <strong>${correctCount}</strong> de <strong>${quizData.length}</strong> questões.</p>
        <div>${feedback}</div>
    `;
}

// Inicializa o quiz e define o evento de envio
buildQuiz();
submitButton.addEventListener('click', showResults);
