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

//  promth().this.toLowerCase(); converter 




// HER CODE
// const wordArray = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];

// let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]; 

// const wordSpace = []; 
// for (let i = 0; i < randomWord.length; i++){
//     wordSpace[i] = "_"; 
// }

// let lives = 5; 

// while (lives >= 5){
//     alert(wordSpace.join(" ")); 
//     let guess = prompt("Guess a letter:"); 
//     if (guess == null){
//         break; 
//     } else if (guess.length !== 1){
//         alert("Please enter a single letter."); 
//     } else {
//         for (let j = 0; j < randomWord.length; j++){
//             if (randomWord[j] === guess){
//                 wordSpace[j] = guess; 
//             } else {
//                 lives--; 
//             }
//         }
//     }
// }

// alert(wordSpace.join(" ")); 
// alert(`Good job! The answer was ${randomWord}`); 





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


const selectedWords = ["Programmering", "Stockholm", "Studenter", "Javascript", "Afterwork"];


function randomWordSelector() {
    let randomWord = selectedWords[Math.floor(Math.random() * selectedWords.length)];
    return randomWord;
}
console.log(randomWordSelector());

let randomWord = randomWordSelector(); 

function letterConverter() {
    for (let i = 0; i < randomWord.length; i++){
        letterConverter[i] = "_"; 
        return i; 
    }
}
console.log(letterConverter()); 

const validGuess = [];

const lives = 5;