


function computerPlay() {
  let play = Math.random() * 3;
  if (play < 1) {
    return 'rock';
  } else if (play < 2) {
    return 'paper';
  } else return 'scissors';
}

console.log(computerPlay());