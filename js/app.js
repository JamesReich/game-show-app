const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn_reset');
const welcomeOverlay = document.querySelector('.start');
const phraseList = document.querySelector('#phrase ul');

let missed = 0;

let gamePhrases = ['walk the dog',
    'drink more water',
    'debug the code',
    'it is what it is',
    'when life gives you lemons make lemonade'];

startGame.addEventListener('click', () => {

    welcomeOverlay.style.display = 'none';

});

function getRandomPhraseAsArray(arr) {

    let randomSeed = Math.floor(Math.random() * 5);

    let phraseArray = arr[randomSeed].split(' ');

    return phraseArray;

}

function addPhraseToDisplay(arr) {
    // do stuff any arr that is passed in, and add to `#phrase ul`

    let addListItem = document.createElement('li');
    let letter = document.getElementsByClassName('letter');



    for (let i = 0; i < arr.length; i++) {


    }

    return;

}

const gameArray = getRandomPhraseAsArray(gamePhrases);

console.log(addPhraseToDisplay(gameArray));






