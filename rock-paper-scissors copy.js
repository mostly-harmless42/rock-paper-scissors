const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(btn => btn.addEventListener('click', round));

function computerPlay() {
  let play = Math.random() * 3;
  if (play < 1) {
    return 'rock';
  } else if (play < 2) {
    return 'paper';
  } else return 'scissors';
};

function outcome(human, computer) {
  switch (human) {
    case 'rock':
      switch (computer) {
        case 'rock': return 'tie';
        case 'paper': return 'lose';
        case 'scissors': return 'win';
      };
    case 'paper': 
      switch (computer) {
        case 'rock': return 'win';
        case 'paper': return 'tie';
        case 'scissors': return 'lose'
      };
    case 'scissors':
      switch (computer) {
        case 'rock': return 'lose';
        case 'paper': return 'win';
        case 'scissors': return 'tie';
      };
    };
};

let rounds = 0;
let  ties = 0;
let wins = 0;
let losses = 0;


function round(e) {
  if(rounds == 0) display.innerHTML = "";
  let com = computerPlay();
  let hum = e.target.classList[0];
  let out = outcome(hum, com);
  display.innerHTML += `<br /><center>${hum} vs. ${com} <br /> You ${out} round ${rounds+1}</center>`;
  game(out);
};



function game(outcome) {
  switch (outcome) {
    case 'tie': 
      ties++;
      break;
    case 'win': 
      wins++;
      break;
    case 'lose': 
      losses++;
      break;
  };

  rounds++;
  if (rounds == 5) {
    display.innerHTML += `<br /><center>${wins} wins, ${losses} losses, and ${ties} ties</center>`;
    if (wins == losses) display.innerHTML += `<br /><center>You tied the game!</center>`;
    if (wins > losses) display.innerHTML += `<br /><center>You won the game!</center>`;
    if (wins < losses) display.innerHTML += `<br /><center>You lost the game!</center>`;
    rounds = 0;
    wins = 0;
    losses = 0;
    ties = 0;
  };
};