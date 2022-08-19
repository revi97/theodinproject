const selected = document.querySelectorAll("div.options button");
const player_selection = document.querySelector(".container");
const comp_selection = document.querySelector(".contains");
const results = document.querySelector(".results");
const announce = document.querySelector(".announce");
const reset = document.querySelector("#reset");

let computerScore = 0;
let playerScore = 0;

//To get the clicks of the buttons we will be using this
selected.forEach((button) => {
  button.addEventListener("click", getPlayerSelection);
});

reset.addEventListener("click", resetGame);

//To get the computer selection based on the math function
function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
  //4 is max capped & 1 is the lowest limit
  return computerSelection;
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = "It's a draw";
  } else if (playerSelection == 1) {
    if (computerSelection == 2) {
      console.log("You Lose! Paper beats Rock");

      computerScore++;
      results.textContent = `You Lose! Paper beats Rock. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    } else if (computerSelection == 3) {
      console.log("You Win! Rock beats Scissors");
      playerScore++;
      results.textContent = `You Win! Rock beats Scissors. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    } else {
      results.textContent = `It's a draw. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    }
  } else if (playerSelection == 2) {
    if (computerSelection == 1) {
      console.log("You Win! Paper beats Rock");
      playerScore++;
      results.textContent = `You Win! Scissors beats Paper. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    } else if (computerSelection == 3) {
      console.log("You Lose! Scissors beats Paper");
      computerScore++;
      results.textContent = `You Lose! Scissors beats Paper. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    } else {
      results.textContent = `It's a draw. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    }
  } else if (playerSelection == 3) {
    if (computerSelection == 2) {
      console.log("You Win! Scissors beats Paper");
      playerScore++;
      results.textContent = `You Win! Scissors beats Paper. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    } else if (computerSelection == 1) {
      console.log("You Lose! Rock beats Scissors");
      computerScore++;
      results.textContent = `You Lose! Rock beats Scissors. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    } else {
      results.textContent = `It's a draw. Computer Score: ${computerScore} and Player score: ${playerScore}`;
    }
  }
  if (playerScore > 2) {
    announce.textContent = "Player Wins";
  }
  if (computerScore > 2) {
    announce.textContent = "Computer Wins";
  }
}

function playRound(playerSelected, compChoice) {
  let playerSelection = playerSelected;
  console.log("Player Selection", playerSelection);
  console.log("Computer Selection", compChoice);
  getWinner(playerSelection, compChoice);
}

function getPlayerSelection() {
  let playerSelected = this.id;

  let compChoice = getComputerChoice();

  playRound(playerSelected, compChoice);

  playerSelected == 1
    ? (player_selection.textContent = `Player Selection: Rock`)
    : playerSelected == 2
    ? (player_selection.textContent = `Player Selection: Paper`)
    : (player_selection.textContent = `Player Selection: Scissors`);
  compChoice == 1
    ? (comp_selection.textContent = `Computer Selection: Rock`)
    : compChoice == 2
    ? (comp_selection.textContent = `Computer Selection: Paper`)
    : (comp_selection.textContent = `Computer Selection: Scissors`);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  comp_selection.textContent = "";
  player_selection.textContent = "";
  results.textContent = "";
  announce.textContent = "";
}
