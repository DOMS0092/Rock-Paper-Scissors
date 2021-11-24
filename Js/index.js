const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementById('options')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1
}



// const handlePageLoaded = () => {
//     play.addEventListener("click", startGame)
//     rank.addEventListener("click", fetchRanking)
//     description.textContent = "The game of Rock, Paper, Scissors is very simple. Each player picks one of the three objects (usually by making the appropriate hand shape on a count of three!) and these rules are applied to see who has won that round. Paper beats Rock. Scissors beat Paper. Rock beats Scissors. The challenge of the game is to guess what your opponent will choose and pick the appropriate object to beat them."
// }

// const fetchRanking = () =>{
//     fetch("http://localhost:3000/scores")
//     .then(res => res.json())
//     .then(data => data.forEach(displayScore))
// }
// const displayScore = (score) => {
//    const div = document.createElement("div")
//    div.id= `score-${score.id}`
//    div.textContent=`${score.userName} - ${score.score}`
//    ranking.appendChild(div)
// }


// document.addEventListener("DOMContentLoaded", handlePageLoaded)

