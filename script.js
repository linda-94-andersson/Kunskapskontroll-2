const selectedWords = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];

let randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
let randomWordLow = randomWord.toLowerCase();

//  Denna skulle ej vara med om koden skulle skickas till "kund"
// Men är med för att man lättare ska kuna testa och se vilket ord är korrekt
console.log(randomWord);

let lives = 5;
let remainingLetters = randomWord.length;

let hiddenCharacters = randomWord.split("");

function startUp() {
    for (let i = 0; i < randomWord.length; i++) {
        hiddenCharacters[i] = "_";
    }
}

// if (guessInput = randomWord){
//     let logGuess = guessInput;
//     logGuess = prompt.apply(${logGuess}); 
// }

//Fixa logg för fel aktiga bokstäver 

startUp();
do {
    let guessInput = prompt(`${hiddenCharacters.join(" ")} \n Lives left: ${lives}`);


    if (guessInput === null) {
        alert("You have canceled the game");
        break;
    }

    guessInput = guessInput.toLowerCase();

    if (guessInput.length !== 1) {
        alert("Please enter a single letter.");
    }
    else if (!guessInput.search(/[^a-zA-Z]+/)) {
        alert("Please only use letters between A and Z");
    }
    else if (randomWordLow.includes(guessInput)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (guessInput === randomWordLow[i]) {
                hiddenCharacters[i] = randomWord[i];
                remainingLetters--;
            }
        }
    }
    else {
        lives--;
    }

    if (lives === 0) {
        alert(`You have lost! The correct word was ${randomWord}`);
    } else if (hiddenCharacters.join("") === randomWord) {
        alert("You have won, congratulations!")
    }
} while (lives > 0 && remainingLetters > 0);