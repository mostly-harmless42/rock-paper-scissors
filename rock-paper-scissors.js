
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

function round(human = humanPlay(), computer = computerPlay()) {
  console.log(`${human} vs ${computer}`);

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
  let record = [];
  let wins = losses = ties = 0;

  for (x = 0; x <= rounds; x++) {
    let r = round()
    console.log(r)
    record.push(r)
  }

  for (x=0; x <= rounds; x++) {
    switch (record[x]) {
      case 'tie': {ties++}
      case 'win': {wins++}
      case 'loss': {losses++}
    }
  }
}


game(5)

