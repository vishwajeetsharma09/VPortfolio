let userScore = 0;
let CompScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  let options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("game is draw");
  msg.innerText = "Game is Draw ! Play  Again";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log(`you win &{useChoice}`);
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("computer wins");
    CompScore++;
    compScorePara.innerText = CompScore;
    msg.innerText = `you loose . ${compChoice} beats ${userChoice}`;

    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genComputerChoice();
  console.log("comp choice =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice is clicked", choiceId);
    playGame(userChoice);
  });
});
