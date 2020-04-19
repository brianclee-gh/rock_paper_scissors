

function computerPlay() {
    // randomly returns rock, paper, or scissors
    let moves = ["rock", "paper", "scissors"];
    const randomElement = moves[Math.floor(Math.random() * moves.length)];
    return randomElement;

}

// here in case we need to test in VSC, prompt() not supported
//function playerPlay() {
    //let moves = ["rock", "paper", "scissors"];
    //const randomElement = moves[Math.floor(Math.random() * moves.length)];
    //return randomElement;

//}

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();

    if (playerMove === computerSelection) {
    console.log(`Tie, you both picked ${playerSelection}!`)
    return "Tie";
    }

    if (playerMove === "rock") {
        switch (true) {
            case computerSelection === "paper":
                console.log("You lose, paper beats rock!");
                return "computer";

            case computerSelection === "scissors":
                console.log("You win, rock beats scissors!");
                return "player";
        }
    }

    if (playerMove === "paper") {
        switch (true) {
            case computerSelection === "scissors":
                console.log("You lose, scissors beats paper!");
                return "computer";

            case computerSelection === "rock":
                console.log("You win, paper beats rock!");
                return "player";
        }
    }
    

    if (playerMove === "scissors") {
        switch (true) {
            case computerSelection === "rock":
                console.log("You lose, rock beats scissors!");
                return "computer";

            case computerSelection === "paper":
                console.log("You win, scissors beats paper!");
                return "player";
        }
    }


}

function game() {
    console.log("Welcome to Rock, Paper, Scissors! This will be a best-of-5.")
    let playerWins = 0;
    let computerWins = 0;

    while (playerWins < 3 && computerWins < 3) {
        const playerSelection = prompt("Please enter your move");
        // const playerMove = playerPlay();
        // here in case we need to test in VSC (prompt() not supported in node.js)
        const computerMove = computerPlay();
        if (playRound(playerMove, computerMove) === "player") {
            console.log("You won this round!");
            playerWins++;
        } else if (playRound(playerMove, computerMove) === "computer") {
            console.log("You lost this round :(");
            computerWins++;
        } else {
            console.log("tie");
        }
        console.log(`The score so far is: Player: ${playerWins}, Computer: ${computerWins}`)
    }

    if (playerWins === 3) {
        console.log("Congrats, you win!");
    } else {
        console.log("Sorry, you lost :(");
    }

}
