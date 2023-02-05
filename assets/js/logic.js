// Add all variables (selectors) to link to the HTML
var questionsEL = document.querySelector("#questions");
var timer = document.querySelector("#time");
var choicesEL = document.querySelector("#choices");
var submitButton = document.querySelector("#submit");
var startButton = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");
var clearScoreBtn = document.getElementById("clear");

// Play sound on answer
function correctSound() {
  var audio = document.getElementById("correctSound");
  audio.play();
}
function incorrectSound() {
  var audio = document.getElementById("incorrectSound");
  audio.play();
}
//Set the Quiz variables
var currentQuestionIndex = 0; // start question at Index 0 (1st question)
var timePerQuestion = 5;
var time = timePerQuestion * 10; //10 seconds per question
var timerId; //

// start quiz
document.getElementById("start").addEventListener("click", function () {
  start();
});

//start Quiz Function - Start Screen
function startQuiz() {
  var startScreen = document.getElementById("start-screen"); // Coding Quiz Chalenge Page
  startScreen.setAttribute("class", "hide"); // hide start screen

  // show questions
  questionsEL.removeAttribute("class"); // show question section

  //start timer and show starting time
  timerId = setInterval(clockTick, 1000);
  timer.textContent = time;
  getQuestion();
}

// Get current question from the questions Array
function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex]; //Where does currentQuestionIndex arise?

  // update title with current question
  var title = document.getElementById("question-title");
  title.textContent = currentQuestion.title;

  //This is to clear out any old question choices
  choicesEL.innerHTML = "";

  //Create title and possible answer choices and loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceoption = document.createElement("button");
    choiceoption.setAttribute("class", "choice");
    choiceoption.setAttribute("value", choice);
    choiceoption.textContent = i + 1 + ". " + choice;
    // evenListener ?

    choiceoption.onclick = questionClick; //create function questionClick below
    //display choice on the page
    choicesEL.appendChild(choiceoption);
  });
}
function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 10;
    //play incorrect Sound
    incorrectSound();

    if (time < 0) {
      time = 0;
    }
    // display new time on page
    timer.textContent = time;
    feedback.textContent = "Wrong!";
    feedback.style.color = "red";
    feedback.style.fontSize = "400%";
  } else {
    //play correct Sound
    correctSound();
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    feedback.style.fontSize = "400%";
  }

  // flash right/wrong feedback for 1 second
  feedback.setAttribute("class", "feedback");
  setTimeout(function () {
    feedback.setAttribute("class", "feedback hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // time checker
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreen = document.getElementById("end-screen");
  endScreen.removeAttribute("class");

  // show final score
  var highscores = document.getElementById("final-score");
  highscores.textContent = time; //textContent = returns the text content of an element (final-score)

  // hide questions section
  questionsEL.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timer.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

//NEW CODE

submitButton.addEventListener("click", function () {
  const initials = initialsEl.value.trim();

  // don't allow empty input values
  if (!initials) {
    return;
  }

  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  const score = {
    initials,
    time,
  };

  highscores.push(score);
  localStorage.setItem("highscores", JSON.stringify(highscores));

  // redirect to highscores page
  location.href = "highscores.html";
});

//Adding Highscores to highscores.html

//create a function that loops through all the arrays stored in the highscores local storage
function highscoresList () {
  for (var i = 0; i < highscores.length; 1++); {

var Score = highscores[i].initials + highscores[i].time
//create li element
var newScore = document.createElement("li");
//append score to li element
newScore.textContent = text;
scoreCard.appendChild(newScore);
}
}

highscoresList ()