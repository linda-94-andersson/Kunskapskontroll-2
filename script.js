// const selectedWords = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];

// function wordString() {
//     let selectRandom = Math.floor(Math.random() * selectedWords.length);
//     let randomWordSelect = selectedWords[selectRandom];
//    console.log(randomWordSelect);
//     return randomWordSelect;
// }

// wordString();

// function transformWord() {

// }


//  while (score < 5 run program) eller for ? 




// const selectedWords = new Map([
//     ["Programmering"],
//     ["Stockholm"],
//     ["Studenter"],
//     ["Javascript"],
//     ["Afterwork"]
// ]);

// const wordList = [...selectedWords.keys()]; 

// const getRandomWord = function (list){
//     const hideWord = selectWord.replace(/a-z/g, "_");  
//     console.log(hideWord); 
//     return list[Math.floor(Math.random() * wordList.length)];
// }; 

// let selectWord; 
// selectWord = getRandomWord(wordList); 

// for (let i = 0; i < selectWord.length; i++){
// } 

// let lives = 5; 
// const looseLife = function () {
//     lives--; 
//     if (lives === 0){
//         alert(`You lost, the word was ${selectWord}`); 
//     }
// }

//  prompt().this.toLowerCase(); converter 




// HER CODE
// var words = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];

// var word = words[Math.floor(Math.random() * words.length)]; 

// var answerArray = []; 

// for (var i = 0; i < word.length; i++){
//     answerArray[i] = "_"; 
// }

// var remainingLetters = word.length; 

// while (remainingLetters > 0){
//     alert(answerArray.join(" ")); 
//     var guess = prompt("Guess a letter:"); 
//     if (guess == null){
//         break; 
//     } else if (guess.length !== 1){
//         alert("Please enter a single letter."); 
//     } else {
//         for (var j = 0; j < word.length; j++){
//             if (word[j] === guess){
//                 answerArray[j] = guess; 
//                 remainingLetters--;  
//             }
//         }
//     }
// }

// alert(answerArray.join(" ")); 
// alert(`Good job! The answer was ${word}`); 





// const hangman = {}; 

// hangman.onePlayer = [
//     ["Programmering"],
//     ["Stockholm"],
//     ["Studenter"], 
//     ["Javascript"],
//     ["Afterwork"]
// ]; 

// hangman.randomWord = hangman.onePlayer[Math.floor(Math.random() * hangman.onePlayer.length)]; 

// hangman.onePlayer = hangman.randomWord[1].toUpperCase().split([,]); 

// hangman.validGuess = /[a-zA-Z]/; 

// hangman.userGuess = []; 

// hangman.start = function (){
//     alert("Enter a letter :" + prompt); 
// }







// const selectedWords = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];


// function randomWordSelector() {
//     let randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
//     return randomWord;
// }
// console.log(randomWordSelector());

// let randomWord = randomWordSelector();
// const validGuess = [];

// function letterConverter() {
//     for (let i = 0; i < randomWord.length; i++) {
//         validGuess[i] = "_";
//         return validGuess;
//     }
// }
// console.log(letterConverter());

// let lives = 5;

// while(lives > 0){
//     alert(validGuess.join(" ")); 
//     let guess = prompt(`Lives left: ${lives}`); 
//     if (guess == null){
//         break; 
//     } else if (guess.length !==1){
//         alert("Please enter a single letter."); 
//     } else {
//         for (let j = 0; j < randomWord.length; j++){
//             if (randomWord[j] === guess){
//                 validGuess[j] = guess;
//             } else {
//                 lives--; 
//             }
//         }
//     }
// }







// for (const letterCheck of letter) {

// count++;
// if (letterCheck.includes(letter)) {
//     answer = replaceAt(count, letter, answer);
//     console.log(replaceAt(count, letter, answer));
// }

//wordStatus[rightGuess.indexOf(input)] = input; 

// function replaceAt(index, replace, string) {
//     return (
//         string.substr(0, index) +
//         replace +
//         string.substr(index + replace.length)
//     );
// }
// answer = arrayOfCharacters; 
// let answerArray = [];
// let count = -1;
// let answer;





const selectedWords = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];

const randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];

console.log(randomWord);

let lives = 5;
let remainingLetters = randomWord.length;

const arrayOfCharacters = randomWord.split("");
console.log(arrayOfCharacters);

function startUp() {
    for (let i = 0; i < randomWord.length; i++) {
        arrayOfCharacters[i] = "_";
    }
}

startUp();
do {
    let letter = prompt(`${arrayOfCharacters.join(" ")} 
    Lives left: ${lives}`);
    if (letter === null) {
        break;
    }
    else if (letter.length !== 1) {
        alert("Please enter a single letter.")
    }
    else if (randomWord.includes(letter)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (letter === randomWord[i]) {
                arrayOfCharacters[i] = letter;
                remainingLetters--;
                console.log("r " + remainingLetters);
                console.log("j " + i);
            }
        }
    }
    else {
        if (!randomWord.includes(letter)) {
            lives--;
        }
    }

    if (lives === 0) {
        alert(`You have lost! The correct word was ${randomWord}`);
    } else if (arrayOfCharacters.join("") === randomWord) {
        alert("You have won, congratulations!")
    }
} while (lives > 0 && remainingLetters > 0);

