// Get computer's choice

let cpuChoice;  // Initialize variable

function getComputerChoice() {
    
    let randomNum = Math.floor(Math.random() * 3);  // Get number between 0-3

    if (randomNum == 0) {   // Assign number to choice
        cpuChoice = "Rock"
    }
    else if (randomNum == 1) {
        cpuChoice = "Paper"
    }
    else {
        cpuChoice = "Scissors"
    }

}

// Get user's choice
// Initialize score
// Play rounds (best of 5), update score