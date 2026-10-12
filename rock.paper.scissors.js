/*Zufallsauswahl für rock paper scissor*/

function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}
const computer = getComputerChoice(["Rock", "Paper", "Scissor"]);

console.log(computer);

/*Eingabe des Spielers*/

function getHumanChoice() {
  
    return prompt("Rock, Paper or Scissor");
}
const choice = getHumanChoice();
console.log(choice);

/*Variabeln für Punktesystem*/



/*Bedingungen für Runden stellen*/

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    if (humanChoice === computerChoice.toLowerCase()){
        console.log("TIE!");
    } else if ((human === "rock" && computer === "scissor") || 
              (human === "paper" && computer === "rock") || 
              (human === "scissor" && computer === "paper")) {
        humanScore++;
        console.log("Player won!!");
    } else {
        computerScore++;
        console.log("Player Lost!")
    }
}



/*Mehrere Runden spielen*/

function playGame() {
    humanScore = 0;
    computerScore = 0;
   for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(["Rock", "Paper", "Scissor"]);
    playRound(humanSelection, computerSelection)
   };
}

playGame();



