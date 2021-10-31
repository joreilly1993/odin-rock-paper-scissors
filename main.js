let playerScore = 0;
let computerScore = 0;
// This function blurs/disbables the paper image on the player selection side.
function blurPaperImage() {
    const blurPaper = document.getElementById("player-paper-button");
    blurPaper.classList.add("blur-paper");
}
// This function blurs/disables the scissors image on the player selection side.
function blurScissorsImage() {
    const blurScissors = document.getElementById("player-scissors-button");
    blurScissors.classList.add("blur-scissors");
}
// This function blurs/disables the rock image on the player selection side.
function blurRockImage() {
    const blurRock = document.getElementById("player-rock-button");
    blurRock.classList.add("blur-rock");
}
// This function makes a random selection for the computer.
function computerPlay() {
    let computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    return computerSelection;
  }

  
  const computerSelections = ['rock', 'paper', 'scissors']
    let computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];

    // This function blurs/disables paper and scissors if the computer selects rock.
    function computerRockSelection() {
        if (computerSelection === 'rock') {
            const computerRockSelection = document.getElementById("computer-rock-selection");
            computerRockSelection.classList.add("computer-rock-border");
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");
        }
    }

const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        if (e.target.id === 'player-rock-button' && computerSelection === 'paper' || 'scissors' ) {
            e.target.style = 'border: 10px solid red;'
            playerScore = document.getElementById("player-score-counter").textContent = parseInt(playerScore) + 1;
            console.log(playerScore);
            blurPaperImage();
            blurScissorsImage();
            computerRockSelection();
            console.log(computerSelection);
        } 
        if (e.target.id === 'player-paper-button') {
            e.target.style = 'border: 10px solid red;'
            blurRockImage();
            blurScissorsImage();
        }
        if (e.target.id === 'player-scissors-button') {   e.target.style = 'border: 10px solid red;'
            blurRockImage();
            blurPaperImage();
        }
        });
    });



        const buttons = document.querySelectorAll('button');

//the .forEach method iterates through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' event listener
    button.addEventListener('click', (e) => {
        if (e.target.id === 'btn1') { 
            e.target.style = 'background-color: blue; color: white;'
          }
          if (e.target.id === 'btn2') { 
            e.target.style = 'background-color: blue; color: white;'
          }
          if (e.target.id === 'btn3') { 
            e.target.style = 'background-color: blue; color: white;'
          }
    });
});
/*
<script>

let playerSelection = 'rock'
let computerSelections = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
  return computerSelection;
}
console.log(computerPlay());

function playerPlay() {
  player = prompt('Enter rock, paper or scissors');
    return player.toLowerCase();
    console.log(player);
}
function playRound() {
   let play = playerPlay();
   let comp = computerPlay();
    if (play === comp) {
        let result = 'It was a tie, play again!';
    alert(result);
    } else if (play === 'rock' && comp === 'scissors') {
        let result = console.log('Rock beats paper, you win!');
        playerScore++;
        alert('Rock beats paper, you win! Your score is ' + playerScore + ' and The Computer\'s score is ' + computerScore);
    } else if (play === 'rock' && comp === 'paper') {
        let result = console.log("Rock loses to paper, sorry try again!");
        computerScore++;
        alert('Rock loses to paper, sorry try again! Your score is ' + playerScore + ' and The Computer\'s score is ' + computerScore);
    } else if (play === 'paper' && comp === 'rock') {
        let result = console.log('Paper beats rock, you win!');
        playerScore++;
        alert('Paper beats rock, you win! Your score is ' + playerScore + ' and The Computer\'s score is ' + computerScore);
    } else if (play === 'paper' && comp === 'scissors') {
        let result = console.log('Paper loses to scissors, sorry try again!');
        computerScore++;
        alert('Paper loses to scissors, sorry try again! Your score is ' + playerScore + ' and The Computer\'s score is ' + computerScore);
    } else if (play === 'scissors' && comp === 'paper') {
        let result = console.log('Scissors beats paper, you win!')
        playerScore++;
        alert('Scissors beats paper, you win! Your score is ' + playerScore + ' and The Computer\'s score is ' + computerScore);
    } else if (play === 'scissors' && comp === 'rock') {
        let result = console.log('Scissors loses to rock, sorry try again!');
        computerScore++;
        alert('Scissors loses to rock, sorry try again! Your score is ' + playerScore + ' and The Computer\'s score is ' + computerScore);
    }
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > computerScore) {
        alert('Game over. You win! You scored ' + playerScore + ' points and the computer scored ' + computerScore + ' points.');
    } else if (playerScore < computerScore) {
        alert('Game over. You lost! You scored ' + playerScore + ' points and the computer scored ' + computerScore + ' points.');
    } else {
        alert('Game over, it was a tie! You and the computer both scored ' + playerScore + ' points.')
    }
}


</script> */