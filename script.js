'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('.click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('NO NUMBER')
    } else if (guess === secretNumber) {
        displayMessage('CORRECT NUMBER');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("you lost the game");
            document.querySelector('.score').textContent = 0;
        }
    }
});