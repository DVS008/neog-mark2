var readLineSync = require('readline-sync');
let score = 0;
//array for quiz
var questions = [{ 
question: "What is the Lead character name in Jalsa Movie? ",
  answer: "Sanjay Sahu"
}, 
{question: "What is the height of Sanjay Sahu?(mention as displayed in song) ",
 answer: "182 cms"
},
{question: "What is the weight of Sanjay Sahu?(mention as displayed in song) ",
  answer: "146 lbs"
},
{question: "In which year movie was released? ",
  answer: "2008"
},
{question: "What is the female lead character name in the movie? ",
  answer: "Bhagyamathi"
}];
//welcoming User
function welcome(){
var userName = readLineSync.question("What is your Name? ");
console.log('Welcome ' + userName + ' Jalsa Movie Quiz!');
}
//game functionality -1 for wrong answer
function game(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() ===  answer.toUpperCase())     
  {
    console.log('correct!');
   score = score+1;
  } 
  else{
    console.log('Wrong!');
    score = score-1;
  }
  console.log('your current score:', score);
  console.log('------------');
}
function play(){
for(i = 0; i< questions.length; i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)
}
}
function displayScore(){
  console.log("Your score is: ", score,'\n Thanks for playing, sanjay Sahu Signing off!');
}
welcome();
play();
displayScore();

