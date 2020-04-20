let playerWins = 0;
let computerWins = 0;
const MAX_POINTS = 5;
let game_over = false;

function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function game() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
        if (!game_over) playRound(button.id);
    });
});
}

function playRound(playerMove) {
    let computerSelection = computerPlay();
    let currentResult = document.querySelector('#roundResults');

    if (playerMove === computerSelection) {
    currentResult.textContent = `Tie, you both picked ${playerMove}!`;
    updateStandings("tie");
    return;
    }

    if (playerMove === "rock") {
        switch (true) {
            case computerSelection === "paper":
                currentResult.textContent = `You lose, paper beats rock!`;
                updateStandings("computer");
                break;

            case computerSelection === "scissors":
                currentResult.textContent = `You win, rock beats scissors!`;
                updateStandings("player");
                break;
        }
    }

    if (playerMove === "paper") {
        switch (true) {
            case computerSelection === "scissors":
                currentResult.textContent = `You lose, scissors beats paper!`;
                updateStandings("computer");
                break;

            case computerSelection === "rock":
                currentResult.textContent = `You win, paper beats rock!`;
                updateStandings("player");
                break;
        }
    }
    

    if (playerMove === "scissors") {
        switch (true) {
            case computerSelection === "rock":
                currentResult.textContent = `You lose, rock beats scissors!`;
                updateStandings("computer");
                break;

            case computerSelection === "paper":
                currentResult.textContent = `You win, scissors beats paper!`;
                updateStandings("player");
                break;
        }
    }


}

function updateStandings(winner) {
    let scoreBoard = document.querySelector('#score');

    if (winner == "computer") computerWins++;
    if (winner == "player") playerWins++;

    scoreBoard.textContent = `Player: ${playerWins}, Computer: ${computerWins}`;
    whoWon();


}

function whoWon() {
    let scoreBoard = document.querySelector('#score');
    if (computerWins == MAX_POINTS) {
        scoreBoard.textContent = `You Lose :( \n Final Score is Player: ${playerWins}, Computer: ${computerWins}`;
        gameOver();
    }

    if (playerWins == MAX_POINTS) {
        scoreBoard.textContent = `You Win! \n Final Score is Player: ${playerWins}, Computer: ${computerWins}`;
        gameOver();
    }
}

function gameOver() {
    game_over = true;
}
    

game();
