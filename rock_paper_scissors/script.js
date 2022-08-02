// Get the user to select an option out of the three
// Get a random option from the computer as its choice
// Compare the two and print who the winner is 
// Make the process for 5 cycles and declare the final winner of the same.



function getComputerChoice(){
   let computerSelection = Math.floor( Math.random() * (4-1) + 1);   

   
    if(computerSelection === 1){
        computerSelection = "rock";
    }
    else if(computerSelection === 2){
        computerSelection = "paper";
    }
    else{
        computerSelection = "scissors";
    }
    return computerSelection;
    
}






//Player will select the option here which will be converted to lower case
function getPlayerSelection()
{
    let playerSelection = prompt("Select between Rock Paper Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

console.log(`Player selection is ${getPlayerSelection()}`);
console.log(`Computer selection is ${getComputerChoice()}`);


// Function of the game logic using if loop


function getWinner(playerSelection,computerSelection)
{
    if(playerSelection === computerSelection)
    {
        console.log("Its a draw");
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper")
        {
            console.log("You Lose! Paper beats Rock");
            computerScore++;

        }
        else
        {
            console.log("You Win! Rock beats Scissors");
            playerScore++;
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "paper")
        {
            console.log("You Win! Scissors beats Paper");
            playerScore++;

        }
        else
        {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }
    }
    
    console.log(`Player Score : ${playerScore}`);
    console.log(`Computer Score : ${computerScore}`);
}

function game(){
    for(let i=0;i>5;i++)
    {
        playRound();
    }
    
}
function playRound(){
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    getWinner(playerSelection,computerSelection);
}

let computerScore = 0;
let playerScore = 0;
game();
//console.log( playRound());
//Function to run the game 5 times using for loop

//

