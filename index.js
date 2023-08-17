var readlineSync = require("readline-sync");

var score = 0;
var userName = "";
// high score array

var highScores = [
  {
    name: "Siri",
    score: 2,
  },
  {
    name: "Alexa",
    score: 3,
  },
];

// question answer(multiple choice) array
var questions = [
  {
    question: "What is NSE/BSE ?",
    options: ["Broking Company", "Stock Exchanges", "National Stock Exchange"],
    answer: "Stock Exchanges",
  },
  {
    question: "NSE was established in the year ?",
    options: ["1992", "1892", "2008"],
    answer: "1992",
  },
  {
    question: "How do you invest/trade in Stock Market ?",
    options: ["Demat A/c", "Business Bank A/c", "Your Personal Bank A/c"],
    answer: "Demat A/c",
  },
  {
    question: "How many stocks are listed in NSE ?",
    options: ["2378", "2113", "1748"],
    answer: "2113",
  },
];

// welcome function
function welcome() {
  // take username using readlineSync
  userName = readlineSync.question("What is your name?\n");
  console.log("Welcome " + userName);
  // to proceed for playing game with user concern
  var bool = readlineSync.keyIn(
    "Are you a Stock Market enthusiast ?\n press Y / N \n"
  );
  if (bool.toUpperCase() === "Y" || bool.toUpperCase() === "N") {
    if (bool.toUpperCase() === "Y") {
      console.log("Let's play a small quiz game regarding Stock Market \n");
      game();
    } else console.log(`Thank you, have a good time ${userName}`);
  } else {
    console.log("You din't enter proper key... ");
  }
}

// play function
function play(que, opt, ans) {
  // ask que for the user
  console.log(que);
  var userAns = readlineSync.keyInSelect(opt, "Which option? ");

  if (opt[userAns] === ans) {
    console.log("Right !");
    score += 1;
  } else {
    console.log("Wrong!");
  }

  console.log("Current Score: " + score);
  console.log("--------------------------------------");
}

// function to check if the current user score is high score.
function checkHighScore() {
  isHighScore = false;
  highScores.forEach((i) => {
    if (score > i.score) isHighScore = true;
  });
  if (isHighScore) {
    console.log(
      `woo.. congratulations ${userName}.. your score is highest, ping me I'll update the scorelist..`
    );
  }
}

// show score function
function showScore() {
  console.log(`YAY... You scored : ${score}`);
  checkHighScore();
}

// game function
function game() {
  questions.forEach((i) => play(i.question, i.options, i.answer));
  showScore();
}

// to start the game/program.
welcome();
