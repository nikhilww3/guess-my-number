'use strict';
/*
// there no related to application 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').Value = 23;
console.log(document.querySelector('.guess').Value);
*/
/// know start the application  step by step

// the guess number for random
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// let assume a variable highscore
let highscore = 0;

// make a function to miultiple use line

const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // for check this is a guess number
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number!';
    dispalyMessage('no number!');
    // when player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 correct number!';
    dispalyMessage('🥳 correct number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // set up for highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      // when guess is wrong to dry the code
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'too high!' : '📉too low!';
      dispalyMessage(guess > secretNumber ? 'too high!' : '📉too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥You lost the game!';
      dispalyMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // when guess too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

/*

// Coding Challenge #1

Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Selecttheelementwiththe'again'classandattachaclickeventhandler 
2. Inthehandlerfunction,restoreinitialvaluesofthe'score'and
'secretNumber' variables
3. Restoretheinitialconditionsofthemessage,number,scoreandguessinput
fields
4. Alsorestoretheoriginalbackgroundcolor(#222)andnumberwidth(15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  dispalyMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // the background color
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
