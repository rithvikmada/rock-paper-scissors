// Get computer's choice

let cpuChoice;  // Initialize variable

function getComputerChoice() {
    
    let cpuNum = Math.floor(Math.random() * 3);  // Get number between 0-2

    if (cpuNum == 0) {   // Assign number to choice
        cpuChoice = "ROCK";
    }
    else if (cpuNum == 1) {
        cpuChoice = "PAPER";
    }
    else {
        cpuChoice = "SCISSORS";
    }

}

// Get user's choice

let userChoice;

function getUserChoice() {

    userChoice = (prompt("Choose Rock, Paper, or Scissors (word or first letter)")).toUpperCase(); 

    if (userChoice == "R") userChoice = "ROCK";     // Logic for single-character entry
    else if (userChoice == "P") userChoice = "PAPER";
    else if (userChoice == "S") userChoice = "SCISSORS";
    else userChoice = userChoice;

}

// Initialize score

let cpuScore = 0;
let userScore = 0;

// Play rounds (best of 5), update score