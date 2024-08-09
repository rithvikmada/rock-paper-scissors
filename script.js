let cpuChoice;      // Initialize variables
let cpuScore = 0; 
let userScore = 0;

const rockBtn = document.querySelector("#rock");        // Initialize selectors
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => checkScore("ROCK"));        // Add "click" event listener
paperBtn.addEventListener("click", () => checkScore("PAPER"));
scissorsBtn.addEventListener("click", () => checkScore("SCISSORS"));

    function checkScore(userChoice) {       // Checks if score of 3 is met

        if (cpuScore < 3 && userScore < 3) {
            playRound(getComputerChoice(), userChoice);
        }
       
        if (cpuScore == 3) {
            console.log(`CPU wins the game ${cpuScore}-${userScore}`);
            userScore = 0;
            cpuScore = 0;
        } else if (userScore == 3) {
            console.log(`User wins the game ${userScore}-${cpuScore}`);
            userScore = 0;
            cpuScore = 0;
        }

    }

    function getComputerChoice() {      // Assign random choice for CPU each round
    
        let cpuNum = Math.floor(Math.random() * 3);   
    
        if (cpuNum == 0) {    
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

    function playRound(cpu, user) {     // Game logic
 
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