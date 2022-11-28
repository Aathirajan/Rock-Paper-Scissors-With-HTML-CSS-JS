

let totalscore = { playerscore: 0, computerscore: 0 }


function getComputerChoice() {
  let aichoice = ['Rock', 'Paper', 'Scissors']
  let computerChoice = aichoice[Math.floor(Math.random(aichoice) * 3)]

  return computerChoice
}


function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0


  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1


  } else {
    score = -1
  }


  return score
}



function showResult(score, playerChoice, computerChoice) {


  let resultdiv = document.getElementById('result')
  let handsdiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultdiv.innerText = 'You Lose!'
  }
  else if (score == 0) {
    resultdiv.innerText = 'Its a TIE!'
  }
  else {
    resultdiv.innerText = 'You Won!'
  }
  handsdiv.innerText = `${playerChoice} |  VS  | ${computerChoice}`

  playerScoreDiv.innerText = `Your Score:${totalscore['playerscore']}`
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice()
  
  let score = getResult(playerChoice, computerChoice)
  totalscore['playerscore']+=score
  // console.log( totalscore['playerscore'])
  showResult(score, playerChoice, computerChoice)
}



function playGame() {

  let buttons = document.querySelectorAll('.rpsButton')
  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
  })
  
  let exit = document.getElementById('endGameButton')
  exit.onclick = () => endGame(totalscore)
}


function endGame(totalscore) {
  
  totalscore['playerscore'] = 0
  totalscore['computerscore'] = 0
  let resultdiv =
    document.getElementById('result')
  let handsdiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')


  playerScoreDiv.innerText = ''
  handsdiv.innerText = ''
  resultdiv.innerText = ''

}

playGame()