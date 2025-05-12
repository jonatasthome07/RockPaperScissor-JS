const scoreGame = document.querySelector("#score")
const playerChoice = document.querySelector("#player-choice")
const cpuChoice = document.querySelector("#cpu-choice")
const result = document.querySelector("#result")
const rockBtn = document.querySelector("#rock-btn")
const paperBtn = document.querySelector("#paper-btn")
const scissorBtn = document.querySelector("#scissor-btn")

paperBtn.addEventListener("click", function(){
    playerChoice.innerText = "Your choice: Paper"
})

scissorBtn.addEventListener("click", function(){
    playerChoice.innerText = "Your choice: Scissor"
})

rockBtn.addEventListener("click", function(){
    playerChoice.innerText = "Your choice: Rock"
})