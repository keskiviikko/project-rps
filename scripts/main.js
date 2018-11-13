let footButton = document.querySelector('#foot');
let cockroachButton = document.querySelector('#cockroach');
let nuclearButton = document.querySelector('#nuclear bomb');
let para = document.querySelector('p');

let playerSelection;
let computerSelection = computerPlay();
function computerPlay() {
    let options = ['Foot', 'Cockroach', 'Nuclear bomb'];
    return options[Math.floor(Math.random() * options.length)];
}

function playerSelectionFoot() {
    let playerSelection = 'Foot';
    if (playerSelection == 'Foot' && computerSelection == 'Cockroach') {
        let result = `You win! ${playerSelection} beats ${computerSelection}.`;
        alert(result);
    } else if (playerSelection == 'Foot' && computerSelection == 'Nuclear bomb') {
        let result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        alert(result);
    } else if (playerSelection == computerSelection) {
        let result = 'It\'s a tie. Try again.';
        alert(result);
    } else if (playerSelection == null) {
        alert('Cancelled.');
    } else {
        let result = 'There was a problem. Try again.';
        alert(result);
    }
}

function playerSelectionCockroach() {
    let playerSelection = 'Cockroach';
    if (playerSelection == 'Cockroach' && computerSelection == 'Nuclear bomb') {
        let result = `You win! ${playerSelection} beats ${computerSelection}.`;
        alert(result);
    } else if (playerSelection == 'Cockroach' && computerSelection == 'Foot') {
        let result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        alert(result);
    } else if (playerSelection == computerSelection) {
        let result = 'It\'s a tie. Try again.';
        alert(result);
    } else if (playerSelection == null) {
        alert('Cancelled.');
    } else {
        let result = 'There was a problem. Try again.';
        alert(result);
    }
}

function playerSelectionNuclear() {
    let playerSelection = 'Nuclear bomb';
    if (playerSelection == 'Nuclear bomb' && computerSelection == 'Foot') {
        let result = `You win! ${playerSelection} beats ${computerSelection}.`;
        alert(result);
    } else if (playerSelection == 'Nuclear bomb' && computerSelection == 'Cockroach') {
        let result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        alert(result);
    } else if (playerSelection == computerSelection) {
        let result = 'It\'s a tie. Try again.';
        alert(result);
    } else if (playerSelection == null) {
        alert('Cancelled.');
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