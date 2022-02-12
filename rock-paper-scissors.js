
function computerPlay() {
  let play = Math.random() * 3;
  if (play < 1) {
    return 'rock';
  } else if (play < 2) {
    return 'paper';
  } else return 'scissors';
}

function humanPlay() {
  return window.prompt('type \'rock\', \'paper\', or \'scissors\': ').toLowerCase();
}

function round(human, computer) {
  switch (human) {
    case 'rock':
      switch (computer) {
        case 'rock': return 'tie';
        case 'paper': return 'lose';
        case 'scissors': return 'win';
      }
    case 'paper': 
      switch (computer) {
        case 'rock': return 'win';
        case 'paper': return 'tie';
        case 'scissors': return 'lose'
      }
    case 'scissors':
      switch (computer) {
        case 'rock': return 'lose';
        case 'paper': return 'win';
        case 'scissors': return 'tie';
      }
  }
}

function game(rounds) {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  for (x=0; x<rounds; x++) {
    let human = humanPlay();
    let computer = computerPlay();
    console.log(`${human} vs ${computer}`);
    let r = round(human, computer);
    console.log(r);
    switch (r) {
      case 'tie': ties++; break;
      case 'win': wins++; break;
      case 'lose': losses++; break;
    }
  }
  if (wins>losses) {console.log("Won game!");}
  else if (losses>wins) {console.log("Lost game!");}
  else {console.log("Tie!");}
  console.log(`with ${wins} wins, ${losses} losses, and ${ties} ties`);
}

let numR = window.prompt('Enter number of rounds: ');

game(numR);