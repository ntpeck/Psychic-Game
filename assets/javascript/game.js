/* Grab DOM Elements */
    var winner = document.getElementById("win");
    var loser = document.getElementById("lose");
    var guesses = document.getElementById("guessesLeft");
    var letters = document.getElementById("lettersGuessed");

/* possible letters */
    var pL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];

/* generated number (index number from above array) */
    var gN = Math.floor(Math.random() * pL.length);

/* generated letter corresponding with the index number(gN) inside of array pL */
    var gL = pL[gN];

/* check for gL */
    console.log(gL);

/* variables to hold outputs */
    var wins = 0;
    var losses = 0;
    var numGuessesLeft = 5;
    var lettersGuessedList = "";

/* collect a keystroke */
document.onkeyup = function(event){

// Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

/* check for userGuess */
    console.log(userGuess)

    /* Correct User Guess */
        if (userGuess == gL) {
            wins++;
        }    
                      
    /* Incorrect User Guess  */              
        else if (userGuess !== gL) {
            losses++;
            numGuessesLeft--;
        }
    
    /* check wins, losses, guesses left, letters guessed */
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Left: " + numGuessesLeft);
    console.log("Letters Guessed: " + lettersGuessedList)
    
    /* Write to DOM */
    winner.textContent = ("Wins: " + wins);
    loser.textContent = ("Losses: " + losses);
    guesses.textContent = ("Guesses Left: " + numGuessesLeft);
    letters.textContent = ("Letters Guessed: " + lettersGuessedList);
}

