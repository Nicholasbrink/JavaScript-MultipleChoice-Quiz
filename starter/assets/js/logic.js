// Add all variables (selectors) to link to the HTML
var questionsEL = document.querySelector("#questions");
var timer = document.querySelector("#time");
var choicesEL = document.querySelector("#choices");
var submitButton = document.querySelector("#submit");
var startButton = document.querySelector("#start");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");

//Set the Quiz variables
var currentQuestionIndex = 0; // start question at Index 0 (1st question)
var time = questions.length * 10; //10 seconds per question
var timerId; //

//start Quiz Function
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

    if (time < 0) {
      time = 0;
    }
    // display new time on page
    timer.textContent = time;
    feedback.textContent = "Wrong!";
    feedback.style.color = "red";
    feedback.style.fontSize = "400%";
  } else {
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
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;

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

function saveHighscore() {
  // get value of input box
  var initials = initials.value.trim();

  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// submit initials
submitButton.onclick = saveHighscore;

// start quiz
startButton.onclick = startQuiz;

initials.onkeyup = checkForEnter;

//           //event listener for user selection
//           olEl.addEventListener("click", function (event) {

//             console.log(event.target.innerHTML)
//             //if the user selection matches the correct answer
//             if (event.target.innerHTML === quizQuestions[currentQuestion].correctAnswer) {
//                 //tells the user they got it right
//                 feedbackP.textContent = "Correct";
//                 //increases the score
//                 score++;
//                 //increases the question index
//                 currentQuestion++;
//                 //runs the function again with the next question
//                 return askQuestion(currentQuestion);

//                 //if the user selection does not match the correct answer
//             } else {
//                 //tells the user they were wrong
//                 feedbackP.textContent = "Wrong";
//                 //subtracts time from their timer
//                 secondsLeft = secondsLeft - 10;
//                 //increases the score index
//                 currentQuestion++;
//                 //runs the function again with the next question
//                 return askQuestion(currentQuestion);
//             };
//         });
//         //once there are no more questions left
//     } else {
//         //ends the game
//         secondsLeft = 0

//     };

// };
