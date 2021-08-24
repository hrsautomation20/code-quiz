var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoreEl = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back");
var btnClearScoresEl = document.querySelector("#clear-high-scores");

var questionEl = document.getElementById("question");
var answerbuttonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");

var score = 0;
var timeleft;
timerEl.innertext = 0;

var HighScores = [];

var arrayShuffledQuestions;
var QuestionIndex = 0;

// The array of questions for our quiz game.
var questions = [
  {
    q: "Is JavaScript case-sensitive language?",
    a: "2. true",
    choices: [
      { choice: "1. false" },
      { choice: "2. true" },
    ],
  },
  {
    q: "Which of the following code creates an object?",
    a: "3. var book = new Object();",
    choices: [
      { choice: "1. var book = Object();" },
      { choice: "2. var book = new OBJECT();" },
      { choice: "3. var book = new Object();" },
      { choice: "4. var book = new Book();" },
    ],
  },
  {
    q: "Which of the following function of Number object returns a string value version of the current number?",
    a: "1. toString()",
    choices: [
      { choice: "1. toString()" },
      { choice: "2. toFixed()" },
      { choice: "3. toLocaleString()" },
      { choice: "4. toPrecision()" },
    ],
  },
  {
    q: "Which is not valid data type in Javascript",
    a: "4. float",
    choices: [
      { choice: "1. Undefinded" },
      { choice: "2. Boolean" },
      { choice: "3. Number" },
      { choice: "4. float" },
    ],
  },
  {
    q: "When did javascript first appear?",
    a: "1. 1995",
    choices: [
      { choice: "1. 1995" },
      { choice: "2. Roaring twenties" },
      { choice: "3. 2005" },
      { choice: "4. 2000" },
    ],
  },
  {
    q: "What does DOM stand for?",
    a: "2. Document Object Model",
    choices: [
      { choice: "1. Do Overnight Modules" },
      { choice: "2. Document Object Model" },
      { choice: "3. Divas Obviously Model" },
      { choice: "4. Do Oo Mo" },
    ],
  },
  {
    q: "What is getItem commonly used for?",
    a: "2. local storage",
    choices: [
      { choice: "1. adding drama" },
      { choice: "2. local storage" },
      { choice: "3. online shopping" },
      { choice: "4. naming a variable" },
    ],
  },
];

// When GoBack button is clicked on highscore page

var renderStartPage = function () {};

//Dynamically checking if game-over is true or if the timer is 0. Total Time allowed at 60seconds
var setTime = function () {};

var startGame = function () {};

// Next questions to show

var setQuestion = function () {};

var resetAnswers = function () {};

// Display Questions and answers buttons
var displayQuestion = function () {};

//Display Correct if user have selected correct answer
var answerCorrect = function () {};

//Display Wrong if user have selected wrong answer
var answerWrong = function () {};

// Validation check if answer is correct
var answerCheck = function () {};

//Show total score at end of the questions/Game
var showScore = function () {};

//Create high score values
var createHighScore = function () {};

//Save High Score
var saveHighScore = function () {};

//Load previous values
var loadHighScore = function () {};

//Display HighScore screen form home page
var displayHighScores = function () {};

//Clear High Scores
var clearScores = function () {};

//Start Quiz button to start

// Submit button

//View HighScore button

//Go back button

//Clear Score button
