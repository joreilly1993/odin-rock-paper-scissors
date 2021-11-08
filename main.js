let playerScore = 0;
let computerScore = 0;
let computerSelections = ['rock', 'paper', 'scissors'];
// This function blurs/disbables the paper image on the player selection side.
function blurPaperImage() {
    const blurPaper = document.getElementById("player-paper-button");
    blurPaper.classList.add("blur-paper");
    blurPaper.classList.remove("player-paper-btn");
}
// This function blurs/disables the scissors image on the player selection side.
function blurScissorsImage() {
    const blurScissors = document.getElementById("player-scissors-button");
    blurScissors.classList.add("blur-scissors");
    blurScissors.classList.remove("player-scissors-btn");
}

// This function blurs/disables the rock image on the player selection side.
function blurRockImage() {
    const blurRock = document.getElementById("player-rock-button");
    blurRock.classList.add("blur-rock");
    blurRock.classList.remove("player-rock-btn");
}
function resetPlayerRock() {
    const resetPlayerRock = document.getElementById("player-rock-button");
    resetPlayerRock.classList.remove("blur-rock", "rock-player-selection", "rock-border");
    resetPlayerRock.classList.add("player-rock-btn");
}
function resetComputerRock() {
    const resetComputerRock = document.getElementById("computer-rock-selection");
    resetComputerRock.classList.remove("computer-rock-border", "blur-computer-rock");
}
function resetPlayerPaper() {
    const resetPlayerPaper = document.getElementById("player-paper-button");
    resetPlayerPaper.classList.remove("blur-paper", "paper-player-selection", "paper-border");
    resetPlayerPaper.classList.add("player-paper-btn");
}
function resetComputerPaper() {
    const resetComputerPaper = document.getElementById("computer-paper-selection");
    resetComputerPaper.classList.remove("computer-paper-border", "blur-computer-paper");
}
function resetPlayerScissors() {
    const resetPlayerScissors = document.getElementById("player-scissors-button");
    resetPlayerScissors.classList.remove("blur-scissors", "scissors-player-selection", "scissors-border");
    resetPlayerScissors.classList.add("player-scissors-btn");
}
function resetComputerScissors() {
    const resetComputerScissors = document.getElementById("computer-scissors-selection");
    resetComputerScissors.classList.remove("computer-scissors-border", "blur-computer-scissors");
}
    
let computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];

  function computerPlay() {
    let computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    return computerSelection;
  }
  const computerSelects = computerPlay();




  function playerWins() {
  const roundResults = document.querySelector('#round-results');
            const roundWinner = document.createElement('p');
            roundWinner.className = "winner";
            roundWinner.textContent = 'Player wins!';
            roundResults.appendChild(roundWinner);
  }


    function computerWins() {
  const roundResults = document.querySelector('#round-results');
            const roundWinner = document.createElement('p');
            roundWinner.className = "winner";
            roundWinner.textContent = 'Computer wins!';
            roundResults.appendChild(roundWinner);
    }

    function roundTie() {
        const roundResults = document.querySelector('#round-results');
            const roundWinner = document.createElement('p');
            roundWinner.className = "winner";
            roundWinner.textContent = 'It\'s a tie!';
            roundResults.appendChild(roundWinner);
    }

    function removeComputerWins() {
    const roundResults = document.querySelector('#round-results');
            const roundWinner = document.getElementById('p');
            roundResults.removeChild(roundWinner);
    }
    function removePlayerWins() {
        const roundResults = document.querySelector('#round-results');
                const roundWinner = document.getElementById('p');
                roundResults.removeChild(roundWinner);
    }
    
    


    // This function blurs/disables paper and scissors if the computer selects rock.
        function computerRockSelection() {
          if (computerSelection === 'rock') {
            const computerRockSelection = document.getElementById("computer-rock-selection");
            computerRockSelection.classList.add("computer-rock-border");
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');
            blurComputerPaper.classList.remove("computer-paper-image");
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");
            blurComputerScissors.classList.remove("computer-scissors-image");
          }
        }
        function computerPaperSelection() {
          if (computerSelection === 'paper') {
            const computerPaperSelection = document.getElementById("computer-paper-selection");
            computerPaperSelection.classList.add("computer-paper-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

          }
        }
        function computerScissorsSelection() {
          if (computerSelection === 'scissors') {
            const computerScissorsSelection = document.getElementById("computer-scissors-selection");
            computerScissorsSelection.classList.add("computer-scissors-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');     
          }
        }
// The following blurs the player images that weren't selected and gives a point to either the player or computer if they've won.
const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        if (e.target.id === 'player-rock-button' && computerPlay() === 'scissors') {

            playerWins();

            console.log("Computer selection is: Scissors");

            const rockPlayerSelection = document.getElementById("player-rock-button");
            rockPlayerSelection.classList.add('rock-player-selection', 'rock-border');
            rockPlayerSelection.classList.remove('player-rock-btn');

            playerScore = document.getElementById("player-score-counter").textContent = parseInt(playerScore) + 1;
            console.log(playerScore);

            const computerScissorsSelection = document.getElementById("computer-scissors-selection");
            computerScissorsSelection.classList.add("computer-scissors-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');

            const computerRockRemoveBorder = document.getElementById("computer-rock-selection");
            computerRockRemoveBorder.classList.remove("computer-rock-image");

            const computerPaperRemoveBorder = document.getElementById("computer-paper-selection");
            computerPaperRemoveBorder.classList.remove("computer-paper-image");

            blurPaperImage();
            blurScissorsImage();
        }
        else if (e.target.id === 'player-rock-button' && computerPlay() === 'paper') {

            computerWins();

            console.log("Computer selection is Paper");

            const rockPlayerSelection = document.getElementById("player-rock-button");
            rockPlayerSelection.classList.add('rock-player-selection', 'rock-border');

            computerScore = document.getElementById("computer-score-counter").textContent = parseInt(computerScore) + 1;

            const computerPaperSelection = document.getElementById("computer-paper-selection");
            computerPaperSelection.classList.add("computer-paper-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

            const computerRockRemoveBorder = document.getElementById("computer-rock-selection");
            computerRockRemoveBorder.classList.remove("computer-rock-image");

            const computerScissorsRemoveBorder = document.getElementById("computer-scissors-selection");
            computerScissorsRemoveBorder.classList.remove("computer-scissors-image");

            blurPaperImage();
            blurScissorsImage();
            
        }
        else if (e.target.id === 'player-rock-button' && computerPlay() === 'rock') {

            roundTie();

            const rockPlayerSelection = document.getElementById("player-rock-button");
            rockPlayerSelection.classList.add('rock-player-selection', 'rock-border');
            blurPaperImage();
            blurScissorsImage();

            ///let computerSelections = 0;
            
            console.log("Computer selection is: Rock");

            const computerRockSelection = document.getElementById("computer-rock-selection");
            computerRockSelection.classList.add("computer-rock-border");
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

            const computerScissorsRemoveBorder = document.getElementById("computer-scissors-selection");
            computerScissorsRemoveBorder.classList.remove("computer-scissors-image");

            const computerPaperRemoveBorder = document.getElementById("computer-paper-selection");
            computerPaperRemoveBorder.classList.remove("computer-paper-image");
        }
        else if (e.target.id === 'player-paper-button' && computerPlay() === 'rock') {
            const paperPlayerSelection = document.getElementById("player-paper-button");
            paperPlayerSelection.classList.add('paper-player-selection', 'paper-border');
            playerScore = document.getElementById("player-score-counter").textContent = parseInt(playerScore) + 1;
            console.log(playerScore);
            blurRockImage();
            blurScissorsImage();
            playerWins();
            
            const computerRockSelection = document.getElementById("computer-rock-selection");
            computerRockSelection.classList.add("computer-rock-border");
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

            const computerScissorsRemoveBorder = document.getElementById("computer-scissors-selection");
            computerScissorsRemoveBorder.classList.remove("computer-scissors-image");

            const computerPaperRemoveBorder = document.getElementById("computer-paper-selection");
            computerPaperRemoveBorder.classList.remove("computer-paper-image");

            console.log("Computer Selection is: Rock");
        }
        else if (e.target.id === 'player-paper-button' && computerPlay() === 'scissors') {
            const paperPlayerSelection = document.getElementById("player-paper-button");
            paperPlayerSelection.classList.add('paper-player-selection', 'paper-border');
            computerScore = document.getElementById("computer-score-counter").textContent = parseInt(computerScore) + 1;
            console.log(computerScore);
            blurRockImage();
            blurScissorsImage();
            computerWins();
            
            const computerScissorsSelection = document.getElementById("computer-scissors-selection");
            computerScissorsSelection.classList.add("computer-scissors-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');

            const computerRockRemoveBorder = document.getElementById("computer-rock-selection");
            computerRockRemoveBorder.classList.remove("computer-rock-image");

            const computerPaperRemoveBorder = document.getElementById("computer-paper-selection");
            computerPaperRemoveBorder.classList.remove("computer-paper-image");

            console.log("Computer selection is: Scissors");
        }
        else if (e.target.id === 'player-paper-button' && computerPlay() === 'paper') {
            const paperPlayerSelection = document.getElementById("player-paper-button");
            paperPlayerSelection.classList.add('paper-player-selection', 'paper-border');
            blurRockImage();
            blurScissorsImage();
            roundTie();
            
            const computerPaperSelection = document.getElementById("computer-paper-selection");
            computerPaperSelection.classList.add("computer-paper-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

            const computerRockRemoveBorder = document.getElementById("computer-rock-selection");
            computerRockRemoveBorder.classList.remove("computer-rock-image");

            const computerScissorsRemoveBorder = document.getElementById("computer-scissors-selection");
            computerScissorsRemoveBorder.classList.remove("computer-scissors-image");

            console.log("Computer selection is: Paper");
        }
        else if (e.target.id === 'player-scissors-button' && computerPlay() === 'paper') {
            const scissorsPlayerSelection = document.getElementById("player-scissors-button");
            scissorsPlayerSelection.classList.add('scissors-player-selection', 'scissors-border');
            playerScore = document.getElementById("player-score-counter").textContent = parseInt(playerScore) + 1;
            console.log(playerScore);
            blurRockImage();
            blurPaperImage();
            playerWins();
            
            const computerPaperSelection = document.getElementById("computer-paper-selection");
            computerPaperSelection.classList.add("computer-paper-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

            const computerRockRemoveBorder = document.getElementById("computer-rock-selection");
            computerRockRemoveBorder.classList.remove("computer-rock-image");

            const computerScissorsRemoveBorder = document.getElementById("computer-scissors-selection");
            computerScissorsRemoveBorder.classList.remove("computer-scissors-image");

            console.log("Computer selection is: Paper");
        }
        else if (e.target.id === 'player-scissors-button' && computerPlay() === 'rock') {
            const scissorsPlayerSelection = document.getElementById("player-scissors-button");
            scissorsPlayerSelection.classList.add('scissors-player-selection', 'scissors-border');
            computerScore = document.getElementById("computer-score-counter").textContent = parseInt(computerScore) + 1;
            console.log(computerScore);
            blurRockImage();
            blurPaperImage();
            computerWins();
            
            const computerRockSelection = document.getElementById("computer-rock-selection");
            computerRockSelection.classList.add("computer-rock-border");
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');
            const blurComputerScissors = document.getElementById("computer-scissors-selection");
            blurComputerScissors.classList.add("blur-computer-scissors");

            const computerScissorsRemoveBorder = document.getElementById("computer-scissors-selection");
            computerScissorsRemoveBorder.classList.remove("computer-scissors-image");

            const computerPaperRemoveBorder = document.getElementById("computer-paper-selection");
            computerPaperRemoveBorder.classList.remove("computer-paper-image");

            console.log("Computer selection is: Rock");
        }
        else if (e.target.id === 'player-scissors-button' && computerPlay() === 'scissors') {
            const scissorsPlayerSelection = document.getElementById("player-scissors-button");
            scissorsPlayerSelection.classList.add('scissors-player-selection', 'scissors-border');
            blurRockImage();
            blurPaperImage();
            roundTie();
            
            const computerScissorsSelection = document.getElementById("computer-scissors-selection");
            computerScissorsSelection.classList.add("computer-scissors-border");
            const blurComputerRock = document.getElementById("computer-rock-selection");
            blurComputerRock.classList.add('blur-computer-rock');
            const blurComputerPaper = document.getElementById("computer-paper-selection");
            blurComputerPaper.classList.add('blur-computer-paper');

            const computerRockRemoveBorder = document.getElementById("computer-rock-selection");
            computerRockRemoveBorder.classList.remove("computer-rock-image");

            const computerPaperRemoveBorder = document.getElementById("computer-paper-selection");
            computerPaperRemoveBorder.classList.remove("computer-paper-image");

            console.log("Computer selection is: Scissors");
        }
        else if (e.target.id === 'play-again-btn') {

            const roundResults = document.getElementById("round-results");

            const addPaperBorder = document.getElementById("computer-paper-selection");
            addPaperBorder.classList.add("computer-paper-image");

            const addRockBorder = document.getElementById("computer-rock-selection");
            addRockBorder.classList.add("computer-rock-image");

            const addScissorsBorder = document.getElementById("computer-scissors-selection");
            addScissorsBorder.classList.add("computer-scissors-image");

             resetPlayerRock();
             resetComputerRock();
             resetPlayerScissors();
             resetComputerScissors();
             resetPlayerPaper();
             resetComputerPaper();

    while (roundResults.firstChild) {
        roundResults.removeChild(roundResults.firstChild);
        }        
    }
        /*else if (e.target.id === 'reset-game-btn') {
            let resetPlayerScore = document.getElementById('player-score-counter');
            resetPlayerScore.textContent = 0;

            let resetComputerScore = document.getElementById('computer-score-counter');
            resetComputerScore.textContent = 0;
            

            
        }*/
        });
    });

    const resetGame = document.getElementById('reset-game-btn');
    resetGame.addEventListener('click', (e) => {
        if (e.target.id === 'reset-game-btn') {
            
            computerScore = document.getElementById("computer-score-counter").textContent = parseInt(computerScore) - parseInt(computerScore);

            playerScore = document.getElementById("player-score-counter").textContent = parseInt(playerScore) - parseInt(playerScore);
            
        }
    });