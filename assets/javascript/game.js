var startNumber = 0;
var wins = 0;
var losses = 0;

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

var totalScore = 0;


function add(crystal) {
    switch (crystal) {
        case "c1":
            totalScore += c1
            break;
        case "c2":
            totalScore += c2
            break;
        case "c3":
            totalScore += c3
            break;
        case "c4":
            totalScore += c4
            break;
    }

    if (totalScore === startNumber) {
        wins++
        resetGame()
    }

    if (totalScore > startNumber) {
        losses++
        resetGame()
    }

    updateText()
}


function randomStartNumber() {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

function randomNumber() {
    return Math.ceil(Math.random() * 12)
}

function resetGame() {
    startNumber = randomStartNumber()
    c1 = randomNumber()
    c2 = randomNumber()
    c3 = randomNumber()
    c4 = randomNumber()
    totalScore = 0

}

function updateText() {
    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#startNumber").text(startNumber)
    $("#totalScore").text(totalScore)
}



$(document).ready(function () {
    console.log('starting...');
    resetGame()
    updateText()
    $("#c1").click(function () {
        add('c1')
    })
    $("#c2").click(function () {
        add('c2')
    })
    $("#c3").click(function () {
        add('c3')
    })
    $("#c4").click(function () {
        add('c4')
    })
});