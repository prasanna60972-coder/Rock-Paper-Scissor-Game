const playerChoiceSpan = document.getElementById('player-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const gameResultSpan = document.getElementById('game-result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resetButton = document.getElementById('reset-button');
const choiceButtons = document.querySelectorAll('.choices button');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

choiceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.id;
        playRound(playerChoice);
    });
});

resetButton.addEventListener('click', resetGame);

function generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function playRound(playerChoice) {
    const computerChoice = generateComputerChoice();
    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    const result = determineWinner(playerChoice, computerChoice);
    gameResultSpan.textContent = result;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    playerChoiceSpan.textContent = '';
    computerChoiceSpan.textContent = '';
    gameResultSpan.textContent = '';
}