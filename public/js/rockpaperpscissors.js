// A simple rock paper scissors game.
// We'll be using Math Methods here
// .floor will round figures down
// .ceil will round figures up
// .random will generate a number between 0 to 1
// If you want a larger range, use .random() * number.
let gamebutton = document.querySelectorAll('.gameButton');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let scoreResult = document.getElementById('scoreResult');
let resetGame = document.getElementById('resetGame');

// #### Testing that they are properly linked
// rock.onclick = () => console.log("rock")
// paper.onclick = () => console.log("paper")
// scissors.onclick = () => console.log("scissors")
// resetGame.onclick = () => console.log("resetGame")

// console.log(button[1].value);

// #### He forgot to mention forEach() loops
// They are far more direct
// instead of printing each button value manually just...

// button.forEach(content => console.log(content.value));

// // or

// button.forEach(content => {
//     content.onclick = () => console.log(content.value)
// });

// To show the times clicked
// create an object{} that will house the info

// let timesClicked  = {
//     'rock': 0,
//     'paper': 0,
//     'scissors': 0
// };

// #### to access it, include a fuction in your for.Each

// button.forEach(content => {
//     content.onclick = () => {
//         timesClicked[content.value]++
//         content.innerText = timesClicked[content.value]
//     }    
// });

// It works.

// Now for the reset
// Let's create a total score for the player
const totalScore = {playerScore: 0, computerScore: 0};

// Now to create a random generator for the computer.

const computerGenerator = () => {
    const computerOption = ['rock', 'paper', 'scissors']

    const computerRandom = Math.floor(Math.random() * computerOption.length)
    // console.log(computerRandom)
    return computerOption[computerRandom]
};

computerGenerator();

// Now for the Player's choice
const playerChoice = (playerChoice) => {
    // console.log({playerChoice})
    const computerChoice = computerGenerator()
    // console.log({computerChoice})
    const score = rps(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    // console.log({score})
    // console.log(totalScore)
    showResult(score, playerChoice, computerChoice)
};

// Now to take note of the players choice and start the game

const playGame = () => {
    gamebutton.forEach(content => {
        content.onclick = () => playerChoice(content.value)
    })
    resetGame.onclick = () => endGame(totalScore)
};
playGame();

const endGame = (totalScore) => {
    totalScore['playerscore'] = 0
    totalScore['computercore'] = 0
    player.innerText = `Player's Choice:`
    computer.innerText = `Computer's Choice:`
    scoreResult.innerText = `Your Score: 0`
};

// Now for the conditionals.

const rps = (playerSelect, computerSelect) => {
    let score = 0;
    if (playerSelect == computerSelect) {
        player.innerText = `Player's Choice is: ${playerSelect}`
        computer.innerText = `Computer's Choice is: ${computerSelect}`
        return score = 0
    } else if (playerSelect == 'rock' && computerSelect == 'scissors') {
        player.innerText = `Player's Choice is: ${playerSelect}`
        computer.innerText = `Computer's Choice is: ${computerSelect}`
        score = 1
    }  else if (playerSelect == 'paper' && computerSelect == 'rock') {
        player.innerText = `Player's Choice is: ${playerSelect}`
        computer.innerText = `Computer's Choice is: ${computerSelect}`
        score = 1
    } else if (playerSelect == 'scissors' && computerSelect == 'paper') {
        player.innerText = `Player's Choice is: ${playerSelect}`
        computer.innerText = `Computer's Choice is: ${computerSelect}`
        score = 1
    } else {
        player.innerText = `Player's Choice is: ${playerSelect}`
        computer.innerText = `Computer's Choice is: ${computerSelect}`
        return score = 0
    }
    return score
};

const showResult = (score, playerSelect, computerSelect) => {
    let displayScore = totalScore['playerScore']

    if (playerSelect == computerSelect) {
        scoreResult.innerText = `You drew! Your score is stil: ${displayScore}`
    } else if (score == 0) {
        scoreResult.innerText = `You lose! Your score is stil: ${displayScore}`
    } else {
        scoreResult.innerText = `You won! Your score is: ${displayScore}`
    }
};
