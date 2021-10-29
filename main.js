function blurPaperImage() {
    const blurPaper = document.getElementById("player-paper-button");
    blurPaper.classList.add("blur-paper");
}

function blurScissorsImage() {
    const blurScissors = document.getElementById("player-scissors-button");
    blurScissors.classList.add("blur-scissors");
}

function blurRockImage() {
    const blurRock = document.getElementById("player-rock-button");
    blurRock.classList.add("blur-rock");
}

const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
        if (e.target.id === 'player-rock-button') {
            e.target.style = 'border: 10px solid red;'
            blurPaperImage();
            blurScissorsImage();
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