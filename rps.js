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

/* Get Player's selection */
function getPlayerSelection() {
    let playerSelection = prompt(`Rock, Paper, or Scissors?`, '').toLowerCase();
    return playerSelection
}

/* Play one round */
 function quickPlay() {
    const playerSelection = getPlayerSelection();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

/* Play 5 rounds */
function game() {
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    let numberOfDraws = 0;
    while (i < 5) {
        let result = playRound(getPlayerSelection(), computerPlay())
        if (result.includes('You Win')) {
            playerScore++;
            return result;
        } else if (result.includes('You Lose')) {
            computerScore++;
            return result;
        } else {
            numberOfDraws++;
            return result;
        }
    } i++;

    if (playerScore > computerScore) {
        console.log(`You Win! Player: ${playerScore} to Computer: ${computerScore}: draws: ${numberOfDraws}`);
    } else if (playerScore === computerScore) {
        console.log(`It's a draw. Player: ${playerScore} to Computer: ${computerScore}: draws: ${numberOfDraws}`);
    } else {
        console.log(`You lose! Player: ${playerScore} to Computer: ${computerScore}: draws: ${numberOfDraws} `);
    }
}


/* Compare Players selection to Computer's selection */
function playRound(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection != null && playerSelection != undefined && playerSelection != '') {
        if (playerSelection == computerSelection) {
            result = "It\'s a draw!";
        } else if ((playerSelection == 'rock') && (computerSelection == 'paper')){
            result = "You Lose. Paper beats rock.";
        } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
            result = "You Win! Rock beats scissors";
        }  else if ((playerSelection == 'paper') && (computerSelection == 'rock')){
            result ="You Win! Paper beats rock.";
        } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
            result = "You Lose. Scissors beats paper";
        }  else if ((playerSelection == 'scissors') && (computerSelection == 'paper')){
            result = "You Lose. Paper beats rock.";
        } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
            result = "You Lose. Rock beats scissors.";
        } else {
            result = 'Something went wrong';
        }
    } return result; 
}