//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;

//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 10 guesses
var updateGuessesLeft = function() {
    //Sets and shows hw many guesses will be left in the document.
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};


var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//Users guesses and the letters they have guessed.
var updateGuessesSoFar = function() { 
    document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
  };

  // Function will be called when we reset everything
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];
  
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  };
  
  updateLetterToGuess();
  updateGuessesLeft();

  document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  if (guessesLeft > 0){
    if (userGuess == letterToGuess){
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("Nice work! You guessed correctly!");
        reset();
    }
}else if(guessesLeft == 0){
    // Then we will loss and we'll update the html to display the loss 
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    alert("Sorry, you failed to guess the computer's letter.");
    // Then we'll call the reset. 
    reset();
}
  }
