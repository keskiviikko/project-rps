let footButton = document.querySelector('#foot');
let cockroachButton = document.querySelector('#cockroach');
let nuclearButton = document.querySelector('#nuclear bomb');
let para = document.querySelector('p');

function computerPlay() {
    let options = ['Foot', 'Cockroach', 'Nuclear bomb'];
    let randomIndex = [Math.floor(Math.random() * options.length)];
    return (options[randomIndex]);
}
let computerSelection = computerPlay();
let playerSelection;

function playerSelectionFoot() {
    let playerSelection = 'Foot';
    let computerSelection = computerPlay();
    if (computerSelection == 'Cockroach') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
        alert(result);
    } else if (computerSelection == 'Nuclear bomb') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
        alert(result);
    } else if (playerSelection == computerSelection) {
        let result = 'It\'s a tie. Try again.';
        alert(result);
    } else {
        let result = 'There was a problem. Try again.';
        alert(result);
    }
}

function playerSelectionCockroach() {
    let playerSelection = 'Cockroach';
    let computerSelection = computerPlay();
    if (computerSelection == 'Nuclear bomb') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
        alert(result);
    } else if (computerSelection == 'Foot') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
        alert(result);
    } else if (playerSelection == computerSelection) {
        let result = 'It\'s a tie. Try again.';
        alert(result);
    } else {
        let result = 'There was a problem. Try again.';
        alert(result);
    }
}

function playerSelectionNuclear() {
    let playerSelection = 'Nuclear bomb';
    let computerSelection = computerPlay();
    if (computerSelection == 'Foot') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
        alert(result);
    } else if (computerSelection == 'Cockroach') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose!`;
        alert(result);
    } else if (playerSelection == computerSelection) {
        let result = 'It\'s a tie. Try again.';
        alert(result);
    } else {
        let result = 'There was a problem. Try again.';
        alert(result);
    }
}

footButton.onclick = function () {
    playerSelectionFoot();
}

cockroachButton.onclick = function () {
    playerSelectionCockroach();
}

nuclearButton.onclick = function () {
    playerSelectionNuclear();
}