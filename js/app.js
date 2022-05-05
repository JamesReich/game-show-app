const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn_reset');
const welcomeOverlay = document.querySelector('.start');
const phraseList = document.querySelector('#phrase ul');
const button = document.querySelectorAll('button');
const entryMade = document.querySelectorAll('button');
const liveHeart = document.querySelectorAll('img');

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

    let phraseArray = arr[randomSeed].split('');


    return phraseArray;

}

function addPhraseToDisplay(arr) {

    for (let i = 0; i < arr.length; i++) {

        let addListItem = document.createElement('li');

        addListItem.innerHTML = arr[i];

        if (arr[i] !== ' ') {

            addListItem.className = 'letter';

        }

        addListItem = phraseList.append(addListItem);

    }
    return;
}

const gameArray = getRandomPhraseAsArray(gamePhrases);
addPhraseToDisplay(gameArray);

for (let i = 0; i < entryMade.length; i++) {


    entryMade[i].addEventListener('click', () => {

        entryMade[i].classList.add('chosen');

        checkLetter(entryMade[i]);

    });

}


function checkLetter(button) {

    const letter = document.querySelectorAll('.letter');
    let letterFound = null;

    for (let i = 0; i < letter.length; i++) {

        if (letter[i].innerHTML == button.innerHTML) {

            letter[i].classList.add('show');
            letterFound = true;

        }
    }

    if (letterFound == null) {

        console.log(liveHeart[0].src);

        missed = missed + 1;

        liveHeart[missed - 1].src = "images/lostHeart.png"

        console.log(missed)


    }

    return letterFound;
}










