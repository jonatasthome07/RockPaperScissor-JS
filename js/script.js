const scores = ["Paper", "Rock", "Scissor"];
const scoreGame = document.querySelector("#score")
const playerChoice = document.querySelector("#player-choice")
const cpuChoice = document.querySelector("#cpu-choice")
const result = document.querySelector("#result")
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorBtn = document.querySelector("#scissor-btn")

paperBtn.addEventListener("click", function(){
    const randomScore = scores[Math.floor(Math.random() * scores.length)]
    playerChoice.innerText = "Your choice: Paper"
    cpuChoice.innerText = `Computer's choice: ${randomScore}`
    if (randomScore == scores.at(0)){
        result.innerText = "Draw Game!"
    }
    if (randomScore == scores.at(1)){
        result.innerText = "You win!"
    }
    if (randomScore == scores.at(2)){
        result.innerText = "You Lose!"
    }
})

scissorBtn.addEventListener("click", function(){
    const randomScore = scores[Math.floor(Math.random() * scores.length)]
    playerChoice.innerText = "Your choice: Scissor"
    cpuChoice.innerText = `Computer's choice: ${randomScore}`
})

rockBtn.addEventListener("click", function(){
    const randomScore = scores[Math.floor(Math.random() * scores.length)]
    playerChoice.innerText = "Your choice: Rock"
    cpuChoice.innerText = `Computer's choice: ${randomScore}`
})


