const guessForm = document.querySelector("#guess-number");
const guessInput = document.querySelector("#guess-number input");
const numberInput = document.querySelector("#number-input input");

function numberSubmit(ttt) {
  ttt.preventDefault();
  const guessNum = parseInt(guessInput.value);
  const GenNum = numberInput.value;
  const randomNum = Math.ceil(Math.random() * GenNum);
  const userChose = document.querySelector("#userChose");
  const machineChose = document.querySelector("#machineChose");
  const choseDiv = document.querySelector("#choseDiv");
  userChose.innerHTML = `You chose: ${guessNum}, the muchine chose ${randomNum}`;
  if (guessNum.length !== 0 && GenNum.length !== 0) {
    choseDiv.classList.remove("hidden");
  }
  youWon(guessNum, randomNum, machineChose);
}

function youWon(a, b, c) {
  if (a === b) {
    c.innerHTML = "You Won!";
  } else {
    c.innerHTML = "You Lost!";
  }
}

guessForm.addEventListener("submit", numberSubmit);
