let footButton = document.querySelector('#foot');
let cockroachButton = document.querySelector('#cockroach');
let nuclearButton = document.querySelector('#nuclear');
let para = document.querySelector('#result');
let score = document.querySelector('#scores');
let roundresult = document.querySelector('#roundend');

function computerPlay() {
    let options = ['Foot', 'Cockroach', 'Nuclear bomb'];
    let randomIndex = [Math.floor(Math.random() * options.length)];
    return (options[randomIndex]);
}

let computerSelection = computerPlay();
let playerSelection;

let computerScore = 0;
let playerScore = 0;

function playerSelectionFoot() {
    let playerSelection = 'Foot';
    let computerSelection = computerPlay();
    if (computerSelection == 'Cockroach') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
        para.textContent = (result);
        score.textContent = `Player score: ${++playerScore} | Computer score: ${computerScore}`;
    } else if (computerSelection == 'Nuclear bomb') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose...`;
        para.textContent = (result);
        score.textContent = `Player score: ${playerScore} | Computer score: ${++computerScore}`;
    } else {
        let result = 'It\'s a tie. Try again.';
        para.textContent = (result);
        score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
    }
}

function playerSelectionCockroach() {
    let playerSelection = 'Cockroach';
    let computerSelection = computerPlay();
    if (computerSelection == 'Nuclear bomb') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
        para.textContent = (result);
        score.textContent = `Player score: ${++playerScore} | Computer score: ${computerScore}`;
    } else if (computerSelection == 'Foot') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose...`;
        para.textContent = (result);
        score.textContent = `Player score: ${playerScore} | Computer score: ${++computerScore}`;
    } else {
        let result = 'It\'s a tie. Try again.';
        para.textContent = (result);
        score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
    }
}

function playerSelectionNuclear() {
    let playerSelection = 'Nuclear bomb';
    let computerSelection = computerPlay();
    if (computerSelection == 'Foot') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You win!`;
        para.textContent = (result);
        score.textContent = `Player score: ${++playerScore} | Computer score: ${computerScore}`;
    } else if (computerSelection == 'Cockroach') {
        let result = `You chose ${playerSelection}. Computer chose ${computerSelection}. You lose...`;
        para.textContent = (result);
        score.textContent = `Player score: ${playerScore} | Computer score: ${++computerScore}`;
    } else {
        let result = 'It\'s a tie. Try again.';
        para.textContent = (result);
        score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
    }
}

function roundEnd() {
    console.log({ playerScore, computerScore })
    if (playerScore == 5) {
        roundresult.textContent = 'You won this round!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        roundresult.textContent = 'You lost this round...';
        playerScore = 0;
        computerScore = 0;
    } else {
        roundresult.textContent = '';
    }
}

footButton.onclick = function () {
    playerSelectionFoot();
    roundEnd();
}

cockroachButton.onclick = function () {
    playerSelectionCockroach();
    roundEnd();
}

nuclearButton.onclick = function () {
    playerSelectionNuclear();
    roundEnd();
}