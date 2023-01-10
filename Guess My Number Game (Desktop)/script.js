'use strict';

// INITIALIZING DEFAULT VALUES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};


// CHECK BUTTON FUNCTIONALITY
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) 
    {
        displayMessage(' No number!');
    } 
    else if (guess == secretNumber) 
    {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🥳 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) 
      {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } 
    else if (guess !== secretNumber) 
    {
      if (score > 1) 
        {
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(guess > secretNumber ? '📈 Too high !' : '📉 Too low !');
        } 
        else 
        {
            displayMessage('💥 You lose the game');
            document.querySelector('.score').textContent = 0;
        }
    }
    
});

// RESET BUTTON FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function() {
   
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});