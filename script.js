let x = 0;
let y = 0;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return(`Player: ${x}, Computer: ${y}`)
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        x++;
        console.log("Player wins!");
        return(`Player: ${x}, Computer: ${y}`)
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        y++;
        console.log("Computer wins!");
        return(`Player: ${x}, Computer: ${y}`)
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        y++;
        console.log("Computer wins!");
        return(`Player: ${x}, Computer: ${y}`)
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        x++;
        console.log("Player wins!");
        return(`Player: ${x}, Computer: ${y}`)
    } else if (playerSelection === "paper" && computerSelection ===  "rock") {
        x++;
        console.log("Player wins!");
        return(`Player: ${x}, Computer: ${y}`)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        y++;
        console.log("Computer wins!");
        return(`Player: ${x}, Computer: ${y}`)
    } else {
        alert("Not one of the choices!");
        playerSelection = prompt("Rock, Paper, or Scissors?", "");
        playerSelection = playerSelection.toLowerCase();
        playRound();
    }
}
let rps = ["rock", "paper", "scissors"]
function computerPlay() {
    return Math.floor(Math.random() * 3);
}
let playerSelection = playerChoice()
let computerSelection = rps[computerPlay()]

function playerChoice() {
    let s = prompt("Rock, Paper, or Scissors?", "");
    return(s.toLowerCase())
}

function play() {
    for (let counter = 0; counter < 5; counter++){
        console.log(`Game ${counter + 1}!`)
        playerSelection = playerChoice();
        console.log(playerSelection)
        computerSelection = rps[computerPlay()]
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Final Score: Player: ${x}, Computer: ${y}`)
}
console.log(play())