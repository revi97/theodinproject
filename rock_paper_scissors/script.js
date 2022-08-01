// Get the user to select an option out of the three
// Get a random option from the computer as its choice
// Compare the two and print who the winner is 
// Make the process for 5 cycles and declare the final winner of the same.



function getComputerChoice(){
   return Math.floor( Math.random() * (4-1) + 1);   
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

switch(computerSelection){
    case 1:
        if(computerSelection === 1){
            computerSelection = "rock";
        }
        break;
    case 2:
        if(computerSelection === 2){
            computerSelection = "paper";
        }
        break;
    case 3:
        if(computerSelection === 3){
            computerSelection = "scissors";
        }
        break;
}
console.log(`Computer selection is ${computerSelection}`);

//Player will select the option here which will be converted to lower case
let playerSelection = prompt("Select between Rock Paper Scissors");
playerSelection = playerSelection.toLowerCase();
console.log(`Player selection is ${playerSelection}`);



