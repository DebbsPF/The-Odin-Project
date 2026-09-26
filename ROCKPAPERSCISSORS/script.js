let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const getHumanChoice = () => {
    return prompt("Rock, Paper, Scissors");
};

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Its a tie");
    }else if(
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissor" && computerChoice == "paper")
    ){
        console.log("You Win");
        return humanScore++;
    }else{
        console.log("You Lose");
        return computerScore++;
    }
        
}

for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}
   
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
