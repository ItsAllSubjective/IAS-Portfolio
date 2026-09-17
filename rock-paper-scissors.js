const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player-choice-text");
const computerDisplay = document.getElementById("computer-result-text");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("player-score-display");
const computerScoreDisplay = document.getElementById("computer-score-display");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""; 

    document.getElementById("paper-result").classList.remove("show");
    document.getElementById("rock-result").classList.remove("show");
    document.getElementById("scissor-result").classList.remove("show");

    if(playerChoice === computerChoice) {
        result = "You Tied!";
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ?  "YOU WON!" : "YOU LOST!"
                break;
            case "paper":
                result = (computerChoice === "rock") ?  "YOU WON!" : "YOU LOST!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ?  "YOU WON!" : "YOU LOST!"
                break;
        }
    }

    if (computerChoice === "rock") {
        document.getElementById("rock-result").classList.add("show");
    } else if (computerChoice === "paper") {
        document.getElementById("paper-result").classList.add("show");
    } else if (computerChoice === "scissors") {
        document.getElementById("scissor-result").classList.add("show");
    }


    playerDisplay.textContent = `${playerChoice}`;
    computerDisplay.textContent = `${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "tieText");

    switch(result) {
        case "YOU WON!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOST!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default:
            resultDisplay.classList.add("tieText"); 
            break;
    }
}