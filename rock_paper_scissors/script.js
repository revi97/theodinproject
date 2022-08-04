// Get the user to select an option out of the three
// Get a random option from the computer as its choice
// Compare the two and print who the winner is 
// Make the process for 5 cycles and declare the final winner of the same.



//Player will select the option here which will be converted to lower case
function getPlayerSelection()
{
    let playerSelection = prompt("Select between Rock Paper Scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}


//To get the computer selection based on the math function
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

//This gets the selection of both user and computer and then decides the game
function getWinner(playerSelection,computerSelection)
{
    console.log('Player Selection :', playerSelection);
    console.log('Computer Selection : ', computerSelection);

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
    else if(playerSelection === "scissors" || playerSelection === "scissor" ){
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
    console.log('Player Score :', playerScore);
    console.log('Computer Score : ', computerScore);   
}

//This function is called to play a round of game
function playRound(){
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();
    getWinner(playerSelection,computerSelection);
}

//To loop the game 5 times
function game(){
    for(let i=0;i<5;i++)
    {
        playRound();
    }
    if(playerScore> 2)
    {
        console.log("You win the game");
    }
    else if(computerScore> 2)
    {
        console.log("Computer wins the game");
    }
    else{
        console.log("No one won the game");
    }
}


let computerScore = 0;
let playerScore = 0;
game();
