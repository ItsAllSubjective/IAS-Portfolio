// CAP SENSITIVE

// DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");
const progressBar = document.getElementById("progress");


const quizQuestions = [
  {
    question: "Which language is primarily used to style web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "Which keyword creates a changeable variable in JavaScript?",
    answers: [
      { text: "const", correct: false },
      { text: "let", correct: true },
      { text: "return", correct: false },
      { text: "function", correct: false },
    ],
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    answers: [
      { text: "=", correct: false },
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "Which array index represents the first element?",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "-1", correct: false },
      { text: "First", correct: false },
    ],
  },
  {
    question: "Which method adds an item to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "filter()", correct: false },
    ],
  },
  {
    question: "Which method removes the last item from an array?",
    answers: [
      { text: "push()", correct: false },
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "map()", correct: false },
    ],
  },
  {
    question: "Which statement runs code only when a condition is true?",
    answers: [
      { text: "if", correct: true },
      { text: "for", correct: false },
      { text: "return", correct: false },
      { text: "const", correct: false },
    ],
  },
  {
    question: "Which loop is commonly used to repeat code a set number of times?",
    answers: [
      { text: "for", correct: true },
      { text: "if", correct: false },
      { text: "else", correct: false },
      { text: "switch", correct: false },
    ],
  },
  {
    question: "Which property returns the number of items in an array?",
    answers: [
      { text: "length", correct: true },
      { text: "size", correct: false },
      { text: "count", correct: false },
      { text: "total", correct: false },
    ],
  },
  {
    question: "Which operator means AND in JavaScript?",
    answers: [
      { text: "&&", correct: true },
      { text: "||", correct: false },
      { text: "!", correct: false },
      { text: "==", correct: false },
    ],
  },
  {
    question: "Which operator means OR in JavaScript?",
    answers: [
      { text: "&&", correct: false },
      { text: "||", correct: true },
      { text: "!", correct: false },
      { text: "===", correct: false },
    ],
  },
  {
    question: "Which data type represents true or false values?",
    answers: [
      { text: "Boolean", correct: true },
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Array", correct: false },
    ],
  },
  {
    question: "Which data type is commonly used to store text?",
    answers: [
      { text: "String", correct: true },
      { text: "Boolean", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: false },
    ],
  },
  {
    question: "Which keyword sends a value back from a function?",
    answers: [
      { text: "return", correct: true },
      { text: "break", correct: false },
      { text: "const", correct: false },
      { text: "else", correct: false },
    ],
  },
  {
    question: "Which method creates a new HTML element in JavaScript?",
    answers: [
      { text: "createElement()", correct: true },
      { text: "getElement()", correct: false },
      { text: "addElement()", correct: false },
      { text: "makeElement()", correct: false },
    ],
  },
  {
    question: "Which event is triggered when a user presses a button?",
    answers: [
      { text: "click", correct: true },
      { text: "load", correct: false },
      { text: "hover", correct: false },
      { text: "change", correct: false },
    ],
  },
  {
    question: "Which property changes the text inside an HTML element?",
    answers: [
      { text: "textContent", correct: true },
      { text: "classList", correct: false },
      { text: "style", correct: false },
      { text: "dataset", correct: false },
    ],
  },
  {
    question: "Which method can add a CSS class to an element?",
    answers: [
      { text: "classList.add()", correct: true },
      { text: "classList.get()", correct: false },
      { text: "style.add()", correct: false },
      { text: "class.add()", correct: false },
    ],
  },
  {
    question: "What does DOM stand for in web development?",
    answers: [
      { text: "Document Model", correct: false },
      { text: "Document Object", correct: false },
      { text: "Object Model", correct: false },
      { text: "Document Object Model", correct: true },
    ],
  },
  {
    question: "Which language is mainly responsible for webpage structure?",
    answers: [
      { text: "HTML", correct: true },
      { text: "CSS", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ],
  },
];

let currentQuestionsIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    // reset vars
    currentQuestionsIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    // reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionsIndex];

    currentQuestionSpan.textContent = currentQuestionsIndex + 1;

    const progressPercent = (currentQuestionsIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";
    
    questionText.textContent = currentQuestion.question;

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);
        
        answersContainer.appendChild(button);
    });

}

function selectAnswer(event) {
    if (answersDisabled) return;

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        else if (button === selectedButton) {
            button.classList.add("incorrect");
        }
    });

    if(isCorrect) {
        score++;
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionsIndex++;

        if(currentQuestionsIndex <quizQuestions.length){
            showQuestion()
        }
        else {
            showResults()
        }
    },100)
}

function showResults() {
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active")

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100

    if (percentage === 100) {
        resultMessage.textContent = "Good Job, dawg!";
    }
    else if (percentage >= 75) {
        resultMessage.textContent = "Eh, do better";
    }
    else if (percentage >=50) {
        resultMessage.textContent = "Loser ahhhh";
    }
    else {
        resultMessage.textContent = "Straw Brained";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}