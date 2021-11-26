const selectedWords = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];

let randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
let randomWordLow = randomWord.toLowerCase();

//  Denna skulle ej vara med om koden skulle skickas till "kund"
// Men är med för att man lättare ska kuna testa och se vilket ord är korrekt
console.log(randomWord);

let lives = 5;
let remainingLetters = randomWord.length;

let hiddenCharacters = randomWord.split("");

const logGuess = [];

function startUp() {
    for (let i = 0; i < randomWord.length; i++) {
        hiddenCharacters[i] = "_";
    }
}


startUp();
do {
    let guessInput = prompt(`${hiddenCharacters.join(" ")} \n Lives left: ${lives}\n Guesses made: ${logGuess}`);

    if (guessInput === null) {
        alert("You have canceled the game");
        break;
    }

    guessInput = guessInput.toLowerCase();

    if (!guessInput.search(/[^a-zA-Z]+/) || guessInput.length !== 1) {
        alert("Please only use a singel letters between A to Z");
        continue;
    } else if (randomWordLow.includes(guessInput)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (guessInput === randomWordLow[i]) {
                hiddenCharacters[i] = randomWord[i];
                remainingLetters--;
            }
        }
    } else {
        lives--;
    }

    if (!randomWordLow.includes(guessInput)) {
        logGuess.push(guessInput);
    }

    if (lives === 0) {
        alert(`You have lost! The correct word was ${randomWord}`);
    } else if (hiddenCharacters.join("") === randomWord) {
        alert("You have won, congratulations!")
    }
} while (lives > 0 && remainingLetters > 0);