// Get the user to select an option out of the three
// Get a random option from the computer as its choice
// Compare the two and print who the winner is 
// Make the process for 5 cycles and declare the final winner of the same.



const selected = document.querySelectorAll('button');
const player_selection = document.querySelector('.container');
const comp_selection = document.querySelector('.contains');
const results = document.querySelector('.results');

//To get the clicks of the buttons we will be using this 
selected.forEach(button => { button.addEventListener('click', getPlayerSelection)})



//Player will select the option here which will be converted to lower case



//To get the computer selection based on the math function
function getComputerChoice(){

    let computerSelection = Math.floor( Math.random() * (4-1) + 1);   
    //4 is max capped & 1 is the lowest limit

    /*    if(computerSelection === 1){
            computerSelection = "rock";
        }
        else if(computerSelection === 2){
            computerSelection = "paper";
        }
        else{
            computerSelection = "scissors";
        }
    */    
        // console.log(computerSelection);
     return computerSelection;     

     
 }

//This gets the selection of both user and computer and then decides the game
function getWinner(playerSelection,computerSelection)
{
   // console.log('Player Selection :', playerSelection);
   // console.log('Computer Selection : ', computerSelection);

    if(playerSelection === computerSelection)
    {
      //  console.log("Its a draw");
      results.textContent = "It's a draw";
    }
    else if(playerSelection === "1"){
        if(computerSelection === "2")
        {
           console.log("You Lose! Paper beats Rock");
           
            computerScore++;
            results.textContent = `You Lose! Paper beats Rock. Computer Score: ${computerScore} and Player score: ${playerScore}`;

        }
        else
        {
           console.log("You Win! Rock beats Scissors");
            playerScore++;
            results.textContent = `You Win! Rock beats Scissors. Computer Score: ${computerScore} and Player score: ${playerScore}`;
        }
    }
    else if(playerSelection === "3" ){
        if(computerSelection === "2")
        {
            console.log("You Win! Scissors beats Paper");
            playerScore++;
            results.textContent = `You Win! Scissors beats Paper. Computer Score: ${computerScore} and Player score: ${playerScore}`;

        }
        else
        {
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
            results.textContent = `You Lose! Rock beats Scissors. Computer Score: ${computerScore} and Player score: ${playerScore}`;
        }
    }
   // console.log('Player Score :', playerScore);
   // console.log('Computer Score : ', computerScore);   
}

//This function is called to play a round of game



function playRound(playerSelected,compChoice){
    let playerSelection = playerSelected;
    console.log('Player Selection', playerSelection);
    //getComputerChoice();
    console.log('Computer Selection',compChoice);
    getWinner(playerSelection,compChoice);
}

function getPlayerSelection()
{    
    let playerSelected = this.id;
   // console.log(playerSelected);
   player_selection.textContent = `Player Selection: ${playerSelected}`;
    let compChoice = getComputerChoice();
    comp_selection.textContent = `Computer Selection: ${compChoice}`;
    playRound(playerSelected,compChoice);

}



//playRound();
let computerScore = 0;
let playerScore = 0;
