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

// Check if either player has score of 3 to stop game

let cpuScore = 0;
let userScore = 0;

while (cpuScore < 3 && userScore < 3) {
    playRound(getComputerChoice(), getUserChoice());
}

(cpuScore == 3)  // Winning message
    ? console.log(`CPU wins the game ${cpuScore}-${userScore}`)
    : console.log(`User wins the game ${userScore}-${cpuScore}`);

// Play rounds (best of 5), update score

function playRound(cpu, user) {

    if (
    cpu == "ROCK" && user == "SCISSORS" ||
    cpu == "PAPER" && user == "ROCK" ||
    cpu == "SCISSORS" && user == "PAPER") {
        cpuScore++;
        console.log(`CPU chooses ${cpu}, User chooses ${user}`)
        console.log(`CPU wins round; CPU - ${cpuScore}, USER - ${userScore}`);
    } else if (cpu === user) {
        console.log(`Nobody wins!; USER - ${userScore}, CPU - ${cpuScore}`)
    } else {
        userScore++;
        console.log(`CPU chooses ${cpu}, User chooses ${user}`)
        console.log(`User wins round; USER - ${userScore}, CPU - ${cpuScore}`);
    }

}