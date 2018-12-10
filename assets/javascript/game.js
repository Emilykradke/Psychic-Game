var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

// array of letters for computer to choose from
var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// chooses a random letter
var randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];

// When key is pressed, letter is recorded as var guess 
document.onkeyup = function(event){
    var guess = event.key; 
    
    // if player guess != computer guess, decrease guesses Left -1
    // else, wins increases +1
    if (guess != randomLetter) {
        guessesLeft--; 
        document.getElementById("guesses-left").textContent = guessesLeft; 
    } else {
        wins++;
        document.getElementById("win").textContent = wins;
        lettersGuessed = []; 
    // reset game and choose new random letter
        randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
        console.log(randomLetter)
    }

    // if guesses left = 0, increase losses +1, reset guesses left
    if (guessesLeft === 0) {
        losses++; 
        guessesLeft = 10;
        document.getElementById("loss").textContent = losses;
    // reset game and choose new random letter
        lettersGuessed = [];
        randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
        console.log(randomLetter)
    }

    // protect user from pressing key that is not a letter
        if (availableLetters.indexOf(guess) < 0) {
            guessesLeft++;
            alert("That's not a letter!")
    // put player guesses into lettersGuessed array
        } else {
            lettersGuessed.push(guess);
            document.getElementById("letters-guessed").textContent = lettersGuessed;
            console.log(lettersGuessed)
        }

    // // protect user from pressing same key twice
    
    // if (lettersGuessed.includes(guess)) {
    //     guessesLeft++;
    //     alert("You already guessed that!")
    // } else {
    //     lettersGuessed.push(guess);
    // }




    

    










}