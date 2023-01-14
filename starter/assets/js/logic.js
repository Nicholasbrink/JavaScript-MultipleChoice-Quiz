//add start button

// add all variables (selectors) to point to the HTML
//rulesBox;

//questionsTitle
// choicesContainer
//timerContainer
//...
let startButton = document.getElementById("start");
var currentQuestion = 0;

//start Quiz

startButton.oneclick = () => {};
function populateQuestion(question) {
  var question = question.title;
  var choices = question.choices;
  var answer = question.answer;

  // questionTitle.textContent = question;
  var choicesList = document.createElement("ul");
  for (let i = 0; i < choices.length; i++) {
    var choice = document.createElement("li");
    choice.textContent = choices[i];
    choicesList.appendChild(choice);
  }
  // choicesContainer.appendChild(choicesList)

  function endGame() {}
  //when the game ends, it should display their score and give the user the ability to save their initials and their score
  // hide questions container
  //show endscreen continer
  //assign score to finalScore CSSContainerRule
  //reset the timer
  //

  function nextQuestion() {
    currentQuestion++;
    //check if we are on the last question
    if (currentQuestion < questions.length) {
      populateQuestion(questions[currentQuestion]);
    } else {
      endGame();
    }
  }

  var counter;

  //select start button
  startButton.addEventListener("click", function () {
    startScreenElement.setAttribute("class", "hide");
    questionsContainer.setAttribute("class", "visible");

    //show the first question
    currentQuestion = 0;
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
  });
}

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
