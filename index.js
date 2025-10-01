let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["stone", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = `Tie! Both chose ${playerChoice}`;
  } else if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "stone") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You Win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    result = `You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  document.getElementById("result").innerText = result;
  document.getElementById("score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}
