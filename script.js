
const choices = document.querySelectorAll(".choice");

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const resultDisplay = document.getElementById("result");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset-btn");

const moves = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerOptions = ["rock", "paper", "scissors"];

    const computerChoice =
        computerOptions[Math.floor(Math.random() * computerOptions.length)];

    playerHand.textContent = moves[playerChoice];
    computerHand.textContent = moves[computerChoice];

    playerHand.classList.remove("playing");
    computerHand.classList.remove("playing");

    void playerHand.offsetWidth;

    playerHand.classList.add("playing");
    computerHand.classList.add("playing");

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It's a draw! 🤝";
        messageDisplay.textContent = "Great minds think alike!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultDisplay.textContent = "You win! 🎉";
        messageDisplay.textContent = "Yay! You won this round!";
    } else {
        computerScore++;
        resultDisplay.textContent = "You lost! 💜";
        messageDisplay.textContent = "The computer got this one. Try again!";
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

choices.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.dataset.choice);
    });
});

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;

    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";

    playerHand.textContent = "❔";
    computerHand.textContent = "❔";

    resultDisplay.textContent = "Ready to play? ✨";
    messageDisplay.textContent = "Choose your move below!";
});