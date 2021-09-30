var readLineSync = require("readline-sync")
var chalk = require("chalk")

var currentScore = 0

var highScores =[
  {
    name: "Vishnu",
    score: 5
  },
  {
  name: "Bonda",
  score: 4
  },
  {
    name: "Bajji",
    score: 3
  }
] 

var questionsList = [
  questionOne = {
    question: "Am I older than 25? ",
    choices: ["Yes", "No"],
    answer: "No"
  },
  questionTwo = {
    question: "Where do I stay? ",
    choices: ["Bangalore", "Chennai", "Mumbai", "Dehli"],
    answer: "Bangalore"
  },
  questionThree = {
    question: "Which field did i pursue in my undergraduation? ",
    choices: ["Engineering", "Arts", "Medical Sciences", "Dentistry"],
    answer: "Dentistry"
  },
    questionFour = {
    question: "What is my favorite hobby? ",
    choices: ["Reading", "Gaming", "Exercising", "Travelling"],
    answer: "Exercising"
  },
    questionFive = {
    question: "Which month was I born? ",
    choices: ["November", "October", "January", "March"],
    answer: "November"
  }
]


function checkAnswer(userAnswer, correctAnswer){
  if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()){
    console.log("\n" + chalk.green("Thats right!"))
    console.log(chalk.cyan("The answer is " + correctAnswer))
    currentScore = currentScore + 1
  }
  else {
    console.log(chalk.red("\n" + "Oops! sorry thats wrong"))
    console.log(chalk.cyan("The correct answer is " + correctAnswer))
  }
}



console.log("-------------"+chalk.bgMagenta("CLI Quiz - Personal Info")+"------------\n")
var userName = readLineSync.question(chalk.cyan("Please enter your name. "))
console.log(chalk.yellow("Welcome "+chalk.red(userName)+". Let's see how well do you know me!\n"))
readLineSync.keyInPause(chalk.inverse("When you are ready, "))
console.log(chalk.underline("-------------------------------------------------\n"))

  
for (var qn = 0; qn < questionsList.length; qn++){

  var currentQuestion = questionsList[qn]
  console.log(chalk.blue((qn+1)+") Question"))
  console.log(currentQuestion.question)
  var currentAnswer = readLineSync.keyInSelect(currentQuestion.choices, null, {cancel:false, guide:false})
  // console.log(currentAnswer)
  checkAnswer(currentQuestion.choices[currentAnswer], currentQuestion.answer)
  if(qn === questionsList.length - 1){
    console.log(chalk.inverse("\nYour Final Score is "+ currentScore+"\n"))
  }
  else{
    console.log(chalk.yellow("\n" + "Your Current Score is " + currentScore))
   }
  console.log(chalk.underline("-------------------------------------------------\n"))

  
}

console.log("Top 3 High Scores:")
console.log(chalk.grey("----------------"))
console.log(highScores[0].name+" - "+highScores[0].score)
console.log(highScores[1].name+" - "+highScores[1].score)
console.log(highScores[2].name+" - "+highScores[2].score)
console.log(chalk.grey("----------------"))
for (var s = 0; s<highScores.length; s++) {
  var newHighScore = false
  if (currentScore>highScores[s].score) {
    newHighScore = true
  }
}
if (newHighScore == true){
  console.log(chalk.blue("\nCongratulations you have beaten a high score! \nSend me a screenshot to update the list!"))
}
