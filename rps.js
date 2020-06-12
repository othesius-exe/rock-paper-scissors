let computerSelection = '';
let playerSelection = '';

/* Determine the computer's move */
function computerPlay() {
    let randomNumber = Math.random().toFixed(2);
    let computerSelection = '';
    
    if (randomNumber <= 0.33) {
        computerSelection = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    return computerSelection.toLowerCase();
}

/* Get Player's selection */
function getPlayerSelection() {
    playerSelection = prompt(`Rock, Paper, or Scissors?`, '');
    playerSelection.toLowerCase();
    return playerSelection;
}

/* Play one round */
 function quickPlay() {
    getPlayerSelection();
    computerPlay();
    playRound(playerSelection, computerSelection);
}

/* Play 5 rounds */
function game() {

}

/* Compare Players selection to Computer's selection */
function playRound(playerSelection, computerSelection) {
    if (playerSelection != null && playerSelection != undefined && playerSelection != '') {
        if (playerSelection == computerSelection) {
            return "It\'s a draw!";
        } else if ((playerSelection == 'rock') && (computerSelection == 'paper')){
            computerScore++;
            return "You Lose. Paper beats rock.";
        } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
            playerScore++;
            return "You win! Rock beats scissors";
        }  else if ((playerSelection == 'paper') && (computerSelection == 'rock')){
            playerScore++;
            return "You win! Paper beats rock.";
        } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
            computerScore++;
            return "You lose. Scissors beats paper";
        }  else if ((playerSelection == 'scissors') && (computerSelection == 'paper')){
            playerScore++;
            return "You Lose. Paper beats rock.";
        } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
            computerScore++;
            return "You lose. Rock beats scissors.";
        } else {
            return 'Something went wrong';
        }
    }
}