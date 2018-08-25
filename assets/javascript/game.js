var startNumber = 0;
var wins = 0;
var loses = 0;

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

var totalScore = 0;

// document.onkeyup = function ...
// First, detect a key change (or a guess)
// add that guess to the guesses so far
// validate a guess 
// if correct increment a win and reset game
// else decrement guessesLeft 
// if guessesLeft = 0 mark a lose reset game

document.onclick = function (event) {

    var letter = event.key.toLowerCase();

    if (guessesSoFar.includes(letter)) return
   
    guessesSoFar.push(letter)

    if (letter === correctLetter) {
        wins++;
        resetGame()
    }

    else {
        guessesLeft--
        if (guessesLeft === 0) {
            losses++
            resetGame()
        }
    }

    updateText()
}

function randomStartNumber() {
    var number = ""
    var index = Math.floor(Math.random() * number)
    var letter = letters.charAt(index);
    return letter;
}

function resetGame() {
    
}

function updateText() {
    document.getElementById("wins").innerHTML = wins
    document.getElementById("losses").innerHTML = losses
    document.getElementById("").innerHTML = startNumber
    document.getElementById("").innerHTML = totalScore
}



document.onreadystatechange = function() {
    if (document.readyState === 'complete') updateText()
}