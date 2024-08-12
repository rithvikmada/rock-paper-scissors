let cpuChoice;      // Initialize variables
let cpuScore = 0; 
let userScore = 0;
let roundNumber = 0;

const rockBtn = document.querySelector("#rock");        // Initialize selectors
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const message = document.querySelector("#message");
const decisionMessage = document.createElement("h4");
const winnerMessage = document.createElement("h4");

const scores = document.querySelector("#scores")
const userScoreMessage = document.createElement("h2");
const cpuScoreMessage = document.createElement("h2");

const roundLog = document.querySelector("#roundLog");

const body = document.querySelector("body");
const alert = document.createElement("h1");

rockBtn.addEventListener("click", () => checkScore("ROCK"));        // Add "click" event listener
paperBtn.addEventListener("click", () => checkScore("PAPER"));
scissorsBtn.addEventListener("click", () => checkScore("SCISSORS"));

    function checkScore(userChoice) {       // Checks if score of 3 is met

        if (cpuScore < 3 && userScore < 3) {
            
            addContent();
            playRound(getComputerChoice(), userChoice);
        
        } if (cpuScore == 3) {

            message.innerHTML = "";
            scores.innerHTML = "";
            body.insertBefore(alert, roundLog);
            alert.textContent = `CPU WINS THE GAME! ${cpuScore}-${userScore}`;

            userScore = 0;
            cpuScore = 0;
            roundNumber = 0;
        
        } else if (userScore == 3) {
        
            message.innerHTML = "";
            scores.innerHTML = "";
            body.insertBefore(alert, roundLog);
            alert.textContent = `USER WINS THE GAME! ${userScore}-${cpuScore}`;

            userScore = 0;
            cpuScore = 0;
            roundNumber = 0;
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
            
            roundNumber++;
            cpuScore++;
            decisionMessage.textContent = `CPU chooses ${cpu}, User chooses ${user}`;
            winnerMessage.textContent = `CPU WINS ROUND!`;
            userScoreMessage.textContent = `USER: ${userScore}`;
            cpuScoreMessage.textContent = `CPU: ${cpuScore}`;

            let logMessage = document.createElement("h6");
            logMessage.textContent = `Round ${roundNumber}: CPU won round (${cpu} vs. ${user})`;
            roundLog.insertBefore(logMessage, roundLog.firstElementChild);

        } else if (cpu === user) {
            decisionMessage.textContent = `CPU chooses ${cpu}, User chooses ${user}`;
            winnerMessage.textContent = `NOBODY WINS!`
            userScoreMessage.textContent = `USER: ${userScore}`;
            cpuScoreMessage.textContent = `CPU: ${cpuScore}`;

        } else {
            roundNumber++;
            userScore++;
            decisionMessage.textContent = `CPU chooses ${cpu}, User chooses ${user}`;
            winnerMessage.textContent = `USER WINS ROUND!`;
            userScoreMessage.textContent = `USER: ${userScore}`;
            cpuScoreMessage.textContent = `CPU: ${cpuScore}`;

            let logMessage = document.createElement("h6");
            logMessage.textContent = `Round ${roundNumber}: User won round (${user} vs. ${cpu})`;
            roundLog.insertBefore(logMessage, roundLog.firstElementChild);
        }
    
    }

    function addContent() {
        
        alert.innerHTML = "";
        message.appendChild(decisionMessage);
        message.appendChild(winnerMessage);
        scores.appendChild(userScoreMessage);
        scores.appendChild(cpuScoreMessage);
    }