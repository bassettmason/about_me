'use strict';
var correctAnswers = 0;

// Hello prompt
var userName = prompt('Hello, what is your name?');
console.log('User was asked name');

alert('Nice to meet you ' + userName) + '.' ;


function question1() {
  var answer1 = prompt('Do you think I have pets? Please answer with yes or no.').toLowerCase();
  console.log('User was asked about my pets');

  if (answer1 === 'no' || answer1 === 'n') {
    alert('You are correct, but I really want one.');
    correctAnswers += 1;
  } else if (answer1 === 'yes' || answer1 === 'y') {
    alert('You are incorrect ' + userName + ' although I want one really bad.');
  } else {
    alert('You did not follow instruction try again.');
  }
}


function question2() {
  var answer2 = prompt('Have I been to Africa? Please answer with yes or no.').toLowerCase();
  console.log('user was asked about africa');

  if (answer2 === 'yes' || answer2 === 'y') {
    alert('You are correct, I have been to South Africa and Morroco.');
    correctAnswers += 1;
  } else if (answer2 === 'no' || answer2 === 'n') {
    alert('You are incorrect ' + userName + '.' + ' Next Question.');
  } else {
    alert('You did not follow instruction, try again.');
  }
}


function question3() {
  var answer3 = prompt('Do I have any sisters?').toLowerCase();
  console.log('user was asked about my sister');

  if (answer3 === 'yes' || answer3 === 'y') {
    alert('Yay you are correct. I have a sister.');
    correctAnswers += 1;
  } else if (answer3 === 'no' || answer3 === 'n') {
    alert('You are incorrect ' + userName + ' I have one sister' + '.');
  } else {
    alert('You did not follow instruction, try again.');
  }
}


function question4() {
  var answer4 = prompt('Do I like video games?').toLowerCase();
  console.log('user was asked about my video game interest');

  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Correct. I love video games.');
    correctAnswers += 1;
  } else if (answer4 === 'no' || answer4 === 'n') {
    alert('Sorry ' + userName + ' wrong this time.');
  } else {
    alert('You did not follow instruction, try again.');
  }
}


function question5() {
  var answer5 = prompt('Do I like hiking?').toLowerCase();
  console.log('user was asked about my hiking interest');

  if (answer5 === 'yes' || answer5 === 'y') {
    alert(userName + ', you are right this time.');
    correctAnswers += 1;
  } else if (answer5) {
    alert('WRONG!');
  } else {
    alert('You did not follow instructions.');
  }
}


function question6() {
  var i;

  for (i = 0; i < 4; i++) {
    var answer6 = parseInt(prompt('What is my favorite number?'));
    console.log ('User asked to pick my favorite Number');
    var favoriteNumber = 3;

    if (answer6 > favoriteNumber) {
      alert('too big');
    } else if (answer6 < favoriteNumber) {
      alert('too small');
    } else if (answer6 === favoriteNumber) {
      alert('perfect');
      correctAnswers += 1;
      break;
    } else {
      alert('invalid');
    }
  }

  if (i !== 4) {
    alert('Good job again.');
  } else {
    alert('You are not good at this.');
  }
}
//sdfsdfsdfsdgisfsdfd
function question7() {
  var statesLived = ['oregon' , 'california'];
  var j;

  for (j = 0; j < 6; j++) {
    var answer7 = prompt('Can you guess a state I lived in besides Washington?');
    console.log ('User asked what other states I lived in');

    if (statesLived.indexOf(answer7) >= 0) {
      alert('Nice one');
      correctAnswers += 1;
      break;
    } else {
      alert('nah try again');
    }

  }

  if (j >= 6) {
    alert('no more tries');
    alert('These were the correct answers ' + statesLived);
  } else {
    alert ('good job you could have also said ' + statesLived);
  }

  alert('You got ' + correctAnswers + '/7 ' + 'correct.');
  console.log ('alerting the correct answers out of total questions');
}

function startGame() {
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
}

startGame();