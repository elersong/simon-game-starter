// This file will contain the game logic.
// All the event-listening should happen in buttons.js 

// track the order of inputs
let userInputs = [];

// game pattern 
let gamePattern = [];


async function startGame(){
    console.log('game started');

    // machine adds a step to the pattern, then plays through the whole thing
    gamePattern = machineTurn(gamePattern);

    // user clicks through the pattern, repeating the pattern from machine
    let userWins = await checkUserInput();

    // if correct, new round. machine takes another turn
    if (userWins) {

    }
    // if incorrect (patterns don't match), game over
    else {

    }
}

// clear the pattern arrays and start game again
function reset(){
    console.log('you reset the game');
    gamePattern = [];
    userInputs = [];
}

// =============================================================================
// Helper functions
// =============================================================================

// adapted from fisher-yates shuffle algorithm
// https://bost.ocks.org/mike/shuffle/
function shuffle(arr) {
    let copy = [], n = arr.length, i;
    while(n) {
        // pick an element at random
        i = Math.floor(Math.random() * n--);
        // move it into the new array
        copy.push(arr.splice(i,1)[0]);
    }
    return copy;
}

// return a random element from the array passed in
function sample(arr) {
    return shuffle(arr).pop();
}

// Did the user's last turn deviate from the game pattern?
async function checkUserInput() {
    
}

// the machine adds a new step to the game pattern
function machineTurn(gamePattern) {
    let newPattern = gamePattern.push(sample(['blue','green','yellow', 'red']));
    // play the new pattern
    return newPattern;
}