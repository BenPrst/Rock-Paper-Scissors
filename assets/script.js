let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let scoreBoard = document.getElementById("score");
let score = 0;
let resultMessage = document.getElementById("resultMessage");
let playAgain = document.getElementById("playAgain");
let resultMessageDiv = document.getElementById("result-message-div");

let computerPick;

let playerPicker = document.getElementById("rock-paper-scissors");
let resultDiv = document.getElementById("result-div");

let displayPlayerPick = document.getElementById("player-pick").classList;
let displayComputerPick = document.getElementById("computer-pick").classList;

function randomPick() {
  computerPick = Math.floor(Math.random() * 3);
  return computerPick;
}

function win() {
  setTimeout(() => {
    score = score + 1;
    scoreBoard.textContent = score;
    displayPlayerPick.add("ripple");
  }, "4000");
  scoreBoard.textContent = score;
  resultMessage.textContent = "YOU WIN";
}

function lose() {
  setTimeout(() => {
    score = score - 1;
    scoreBoard.textContent = score;
    displayComputerPick.add("ripple");
    document.getElementById("computer-pick").style.opacity = "100%";
  }, "4000");
  resultMessage.textContent = "YOU LOSE";
}

function tie() {
  resultMessage.textContent = "TIE";
}

function reset() {
  displayPlayerPick.remove("rockPick", "scissorsPick", "paperPick", "ripple");
  displayComputerPick.remove("rockPick", "scissorsPick", "paperPick", "ripple");
  document.getElementById("computer-pick").style.opacity = "0%";
}

function toggleDisplay() {
  resultMessageDiv.style.display = "flex";
}

//0=rock
//1=paper
//2=scissors

rock.addEventListener("click", () => {
  reset();
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("rockPick");
  setTimeout(() => {
    toggleDisplay();
  }, "4000");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    tie();
    console.log("tie");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    lose();
    console.log("U LOSE");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    win();
    console.log("U win");
  }
});

paper.addEventListener("click", () => {
  reset();
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("paperPick");
  setTimeout(() => {
    toggleDisplay();
  }, "4000");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    win();
    console.log("U win");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    tie();
    console.log("tie");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    lose();
    console.log("U LOSE");
  }
});

scissors.addEventListener("click", () => {
  reset();
  playerPicker.style.display = "none";
  resultDiv.style.display = "flex";
  displayPlayerPick.add("scissorsPick");
  setTimeout(() => {
    toggleDisplay();
  }, "4000");
  randomPick();
  if (computerPick === 0) {
    displayComputerPick.add("rockPick");
    lose();
    console.log("U LOSE");
  } else if (computerPick === 1) {
    displayComputerPick.add("paperPick");
    win();
    console.log("U win");
  } else if (computerPick === 2) {
    displayComputerPick.add("scissorsPick");
    tie();
    console.log("Tie");
  }
});

playAgain.addEventListener("click", () => {
  playerPicker.style.display = "flex";
  resultDiv.style.display = "none";
  resultMessageDiv.style.display = "none";
});
