let playerCount = 0;
let cpuCount = 0;
const scores = ["Paper", "Rock", "Scissor"];
const scoreGame = document.querySelector("#score")
const cpuPoints = document.querySelector("#cpu-score")
const playerChoice = document.querySelector("#player-choice")
const cpuChoice = document.querySelector("#cpu-choice")
const result = document.querySelector("#result")
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorBtn = document.querySelector("#scissor-btn")
const btns = document.querySelectorAll(".buttons")
const newGameBtn = document.querySelector("#restart-game")
const rulesBtn = document.querySelector(".rules")
const showRules = document.querySelector(".rules-description")

newGameBtn.addEventListener("click", function(){
    scoreGame.innerText = "Your score: 0"
    cpuPoints.innerText = "Computer's score: 0"
    playerChoice.innerText = "Your choice: Rock"
    cpuChoice.innerText = "Computer's choice: Paper"
    result.innerText = "Winner: Computer"
    playerCount = 0;
    cpuCount = 0;
})

paperBtn.addEventListener("click", function(){
    const randomScore = scores[Math.floor(Math.random() * scores.length)]
    playerChoice.innerText = "Your choice: Paper"
    cpuChoice.innerText = `Computer's choice: ${randomScore}`
    if (randomScore == scores.at(0)){
        result.innerText = "Draw Game!"
    }
    if (randomScore == scores.at(1)){
        result.innerText = "You win!"
        playerCount++;
        scoreGame.innerText = `Your Score: ${playerCount}`
    }
    if (randomScore == scores.at(2)){
        result.innerText = "You Lose!"
        cpuCount++;
        cpuPoints.innerText = `Computer's Score: ${cpuCount}`
    }
})

scissorBtn.addEventListener("click", function(){
    const randomScore = scores[Math.floor(Math.random() * scores.length)]
    playerChoice.innerText = "Your choice: Scissor"
    cpuChoice.innerText = `Computer's choice: ${randomScore}`
     if (randomScore == scores.at(0)){
        result.innerText = "You Win!"
        playerCount++;
        scoreGame.innerText = `Your Score: ${playerCount}`
    }
    if (randomScore == scores.at(1)){
        result.innerText = "You Lose!"
        cpuCount++;
        cpuPoints.innerText = `Computer's Score: ${cpuCount}`
    }
    if (randomScore == scores.at(2)){
        result.innerText = "Draw Game!"
    }
})

rockBtn.addEventListener("click", function(){
    const randomScore = scores[Math.floor(Math.random() * scores.length)]
    playerChoice.innerText = "Your choice: Rock"
    cpuChoice.innerText = `Computer's choice: ${randomScore}`
     if (randomScore == scores.at(0)){
        result.innerText = "You Lose!"
        cpuCount++;
        cpuPoints.innerText = `Computer's Score: ${cpuCount}`
    }
    if (randomScore == scores.at(1)){
        result.innerText = "Draw Game!"
    }
    if (randomScore == scores.at(2)){
        result.innerText = "You win!"
        playerCount++;
        scoreGame.innerText = `Your Score: ${playerCount}`
    }
})

rulesBtn.addEventListener("click", function(){
    showRules.classList.toggle("show-rules")
})




