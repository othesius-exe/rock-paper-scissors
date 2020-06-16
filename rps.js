const scoreBoard = document.querySelector('#resultsBoard');
const clearBoard = document.querySelector('#clearBoard');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let playerScoreInt = 0;
let computerScoreInt = 0;

clearBoard.addEventListener('click', (e) => {
    playerScore.textContent = '0';
    playerScoreInt = 0;
    computerScore.textContent = '0';
    computerScoreInt = 0;
    scoreBoard.textContent = 'Choose Your Weapon';
})

/* Determine the computer's move */
function computerPlay() {
    let computerSelection;
    let randomNumber = Math.random().toFixed(2);    
    if (randomNumber <= 0.33) {
        computerSelection = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection.toLowerCase();
}

let playerSelection = '';

const buttons = document.querySelectorAll('button');

buttons.forEach((button ) => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('value') == 'rock') {
            playerSelection = 'rock';
            scoreBoard.textContent = (playRound(playerSelection, computerPlay()));
        } else if (button.getAttribute('value') === 'paper') {
            playerSelection = 'paper';
           scoreBoard.textContent = playRound(playerSelection, computerPlay());
        } else if (button.getAttribute('value') === 'scissors') {
            playerSelection = 'scissors';
            scoreBoard.textContent = playRound(playerSelection, computerPlay());
        }    
    })
})

/* Play one round */
 function quickPlay() {
    const playerSelection = getPlayerSelection();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}


/* Compare Players selection to Computer's selection */
function playRound(playerSelection, computerSelection) {
    let result = '';

    if (playerSelection != null && playerSelection != undefined && playerSelection != '') {
        if (playerSelection == computerSelection) {
            result = "It\'s a draw!";
        } else if ((playerSelection == 'rock') && (computerSelection == 'paper')){
            result = "You Lose. Paper beats rock.";
            computerScoreInt++;
            computerScore.textContent = `${computerScoreInt}`
        } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
            result = "You Win! Rock beats scissors";
            playerScoreInt++
            playerScore.textContent = `${playerScoreInt}`
        }  else if ((playerSelection == 'paper') && (computerSelection == 'rock')){
            result ="You Win! Paper beats rock.";
            playerScoreInt++
            playerScore.textContent = `${playerScoreInt}`
        } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
            result = "You Lose. Scissors beats paper";
            computerScoreInt++;
            computerScore.textContent = `${computerScoreInt}`
        }  else if ((playerSelection == 'scissors') && (computerSelection == 'paper')){
            result = "You win. Scissors beats paper.";
            playerScoreInt++
            playerScore.textContent = `${playerScoreInt}`
        } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
            result = "You Lose. Rock beats scissors.";
            computerScoreInt++;
            computerScore.textContent = `${computerScoreInt}`
        } else {
            result = 'Invalid Selection; Computer Wins';
        }
    
    } return result; 
}