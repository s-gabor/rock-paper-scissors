var score = 0;
var round = 0;


// Get user input
document.getElementById('rock').addEventListener('click', function() {
  play('rock');
});
document.getElementById('paper').addEventListener('click', function() {
  play('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
  play('scissors');
});


// Select a random element from an array
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
  // Update round
  round++

  // Determine the winner
  var possibilities = ["rock", "paper", "scissors"];
  var computerChoice = randomChoice(possibilities);
  var winner = getWinner(computerChoice, userChoice);

  // Update score
  if (winner === 'User') { score++; } 
  if (winner === 'Computer') { score--; }

  // Display results
  document.getElementById('user').textContent = userChoice;
  document.getElementById('score').textContent = score;
  document.getElementById('computer').textContent = computerChoice;
  document.getElementById('round').textContent = 'Round: ' + round;
  document.getElementById('message').textContent = winner + ' wins!';
}
