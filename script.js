// Get computer's choice

let cpuChoice;   // Initialize variable

function getComputerChoice() {
    
    let cpuNum = Math.floor(Math.random() * 3);   // Get number between 0-2

    if (cpuNum == 0) {    // Assign number to choice
        cpuChoice = "ROCK";
    }
    else if (cpuNum == 1) {
        cpuChoice = "PAPER";
    }
    else {
        cpuChoice = "SCISSORS";
    }

    return cpuChoice;

}

// Get user's choice

let userChoice;   // Initialize variable

function getUserChoice() {

    userChoice = (prompt("Choose Rock, Paper, or Scissors (word or first letter)")).toUpperCase(); 

    if (userChoice == "R") userChoice = "ROCK";   // Logic for single-character entry
    else if (userChoice == "P") userChoice = "PAPER";
    else if (userChoice == "S") userChoice = "SCISSORS";
    else userChoice = userChoice;

    return userChoice;
}

// Initialize score

let cpuScore = 0;
let userScore = 0;

while (cpuScore < 3 && userScore < 3) {
    playRound(getComputerChoice(), getUserChoice());
}

(cpuScore == 3) 
    ? console.log(`CPU wins the game ${cpuScore}-${userScore}`)
    : console.log(`User wins the game ${userScore}-${cpuScore}`);

// Play rounds (best of 5), update score

// Check if either player has score of 3 
//

function playRound(cpu, user) {
    console.log(cpu);
    console.log(user)
    cpuScore++;
}