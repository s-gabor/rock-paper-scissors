document.getElementById('rock').addEventListener('click', function() {
  play('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  play('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  play('scissors');
});


function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function getWinner(computerChoice, userChoice) {
  if (computerChoice === "rock" && userChoice === "paper") {
    return "User";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    return "Computer";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    return "Computer";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    return "User";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    return "User";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    return "Computer";
  } else {
    return "It's a tie. Nobody";
  }
}


function play(userChoice) {
  // Determine the winner
  var possibilities = ["rock", "paper", "scissors"];
  var computerChoice = randomChoice(possibilities);
  var winner = getWinner(computerChoice, userChoice);

  // Display results
  document.querySelector('.user-box').innerHTML = 'User\'s choice: <strong>' + userChoice + '</strong>';
  document.querySelector('.computer-box').innerHTML = 'Computer\'s choice: <strong>' + computerChoice + '</strong>';
  document.querySelector('.result-box').textContent = winner + ' wins!';
}