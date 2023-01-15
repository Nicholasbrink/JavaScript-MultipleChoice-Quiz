//add start button

// Add all variables (selectors) to link to the HTML
var questions = document.querySelector("#questions");
var timer = document.querySelector("#time");
var choices = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startButton = document.querySelector("#start");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");

//add global variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;

// var secondsLeft = 90;
// var score = 0;
// var allScores = [];

//add localStorage scores

//Set the Quiz variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerID;

//start Quiz
function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide"); // hide start screen

  // show questions
  questions.removeAttribute("class"); // show question section

  //start timer and show starting time
  timerID = setInterval(clockTick, 1000);
  timer.textContent = time;
  getQuestion();
}

// Get current question from the questions Array
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex]; //Where does currentQuestionIndex arise?
}
// update title with current question
var title = document.getElementById("question-title");
title.textContent = currentQuestion.title;

//This is to clear out any old question choices
choices.innerHTML = "";

// questionTitle.textContent = question;

//Create title and possible answer choices and loop over choices

//Loop over choices
currentQuestion.choices.forEach(function (choice, i) {
  // create new button for each choice
  var choice = document.createElement("button");
  choice.setAttribute("class", "choice");
  choice.setAttribute("value", "choice");
  choice.textContent = i + 1 + ". " + choice;
  // evenListener ?
  choice.onclick = questionClick;
  //display choice on the page
  choices.appendChild(choice);
});

// startButton.addEventListener("click", function () {
//   startScreen.setAttribute("class", "hide");
//   questions.setAttribute("class", "visible");

//Next question
currentQuestion++;

function nextQuestion() {
  //check if we are on the last question
  if (currentQuestion < questions.length) {
    populateQuestion(questions[currentQuestionIndex]);
  } else {
    endGame();
  }
}

var counter;

//show the first question
var currentQuestion = 0;
populateQuestion(questions[currentQuestion]);

counter = 100;
timer = setInterval(function () {
  counter--;
  //set timerContainer text to counter
  if (counter <= o) {
    //endGame()
    clearInterval(timer);
  }
}, 1000);

// show end screen
var endscreen = document.getElementById("end-screen");

function saveHighScore(initial) {
  // get the current highscore value from local storage
  // json parse current highscores value rom local storage, this will be an arrray of object
  // push initial + score to the array
  // order the array from the highest score
  // json stringify then save back to local storage
}
//another click event listener for choices
//  check answer
//      if correct, add 1 to score, move to next question
//      if wrong, remove 10 seconds from the interval, move to the next question
//
//click event istener to submit button
//      var initial = initialInput.value.trim()
//      save highscore(initial) --> score to local storage - save as an array or object
//      redirect to highscore page

//old Code

//  //select start button
//  startButton.addEventListener("click", function () {
//   startScreen.setAttribute("class", "hide");
//   questions.setAttribute("class", "visible");

// choicesContainer.appendChild(choicesList)

// function endGame() {}
//when the game ends, it should display their score and give the user the ability to save their initials and their score
// hide questions container
//show endscreen continer
//assign score to finalScore CSSContainerRule
//reset the timer
//

// start quiz
startButton.onclick = startQuiz;
