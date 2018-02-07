'use strict';

// var userName = prompt('Hello, what is your name?');
// console.log('User was asked name');

// alert('Nice to meet you ' + userName) + '.' ;

// var answer1 = prompt('Do you think I have pets? Please answer with yes or no.').toLowerCase();
// console.log('User was asked about my pets');

// if (answer1 === 'no' || answer1 === 'n') {
//   alert('You are correct, but I really want one.');    
// } else if (answer1 === 'yes' || answer1 === 'y') { 
//   alert('You are incorrect ' + userName + ' although I want one really bad.');
// } else {
//   alert('You did not follow instruction try again.');
// }

// var answer2 = prompt('Have I been to Africa? Please answer with yes or no.').toLowerCase();
// console.log('user was asked about africa');

// if (answer2 === 'yes' || answer2 === 'y') { 
//   alert('You are correct, I have been to South Africa and Morroco.');    
// } else if (answer2 === 'no' || answer2 === 'n') { 
//   alert('You are incorrect ' + userName + '.' + ' Next Question.');    
// } else {
//   alert('You did not follow instruction, try again.');
// }

// var answer3 = prompt('Do I have any sisters?').toLowerCase();
// console.log('user was asked about my sister');

// if (answer3 === 'yes' || answer3 === 'y') { 
//   alert('Yay you are correct. I have a sister.');
// } else if (answer3 === 'no' || answer3 === 'n') { 
//   alert('You are incorrect ' + userName + ' I have one sister' + '.');
// } else {
//   alert('You did not follow instruction, try again.');
// }

// var answer4 = prompt('Do I like video games?').toLowerCase();
// console.log('user was asked about my video game interest');

// if (answer4 === 'yes' || answer4 === 'y') {
//   alert('Correct. I love video games.');
// } else if (answer4 === 'no' || answer4 === 'n') {
//   alert('Sorry ' + userName + ' wrong this time.');
// } else {
//   alert('You did not follow instruction, try again.');
// }

// var answer5 = prompt('Do I like hiking?').toLowerCase();
// console.log('user was asked about my hiking interest');

// if (answer5 === 'yes' ||  answer5 === 'y') {
//   alert(userName + ', you are right this time.');
// } else if (answer5) {
//   alert('WRONG!');
// } else {
//   alert('You did not follow instructions.');
  
// }


// break
// flag





  

var i;

for (i = 0; i < 4; i++) {  

  var answer6 = prompt('What is my favorite number?');
  var favoriteNumber = 3;

  if (answer6 > favoriteNumber) {
    alert('too big');    
  } else if (answer6 < favoriteNumber) {
    alert('too small');    
  } else if (answer6 = favoriteNumber) {
    alert('perfect');
    i = 4    
  } else {
    alert('invalid')
  }
  
}

