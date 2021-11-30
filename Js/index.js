const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-choice");
const computerScore_span = document.getElementById("computer-choice");
const resultsDisplay_div = document.querySelector(".result");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];
}

function press(userChoice) {
const computerChoice = getComputerChoice();
console.log("user choice = " + userChoice );
console.log("computer choice = " + computerChoice);
}
press("r")


rock_div.addEventListener('click', function() {
    press("r");
})

paper_div.addEventListener('click', function() {
    press("p");
})

scissors_div.addEventListener('click', function() {
    press("s");
})


// const selectionButtons = document.querySelectorAll('[data-selection]')

// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener('click', e => {
//         const selectionName = selectionButtons.dataset.selection
//         makeSelection(selectionName)
//     })
// })

// function makeSelection(selectionName) {
//     console.log(selections)
// }



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

