const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn_reset');
const welcomeOverlay = document.querySelector('.start');
const phraseList = document.querySelector('#phrase ul');
const button = document.querySelectorAll('button');
const entryMade = document.querySelectorAll('button');
const liveHeart = document.querySelectorAll('img');
const gameTitle = document.querySelector('.title');

let missed = 0;

let gamePhrases = ['walk the dog',
    'drink more water',
    'debug the code',
    'it is what it is',
    'the quick brown fox jumps over the lazy dog',
    'when life gives you lemons make lemonade'];





//Hides the start overlay on click
startGame.addEventListener('click', () => {

    welcomeOverlay.style.display = 'none';

});

//Grabs array 'gamePhrases' and passes the characters into an array
function getRandomPhraseAsArray(arr) {

    let randomSeed = Math.floor(Math.random() * 6);

    let phraseArray = arr[randomSeed].split('');


    return phraseArray;

}

//Takes an array and appends its values to a list element depending on if it is a blank space or not
function addPhraseToDisplay(arr) {

    for (let i = 0; i < arr.length; i++) {

        let addListItem = document.createElement('li');
        let addBlankSpace = document.createElement('li');

        addListItem.innerHTML = arr[i];

        if (arr[i] !== ' ') {

            addListItem.className = 'letter';

        } else if (arr[i] == ' ') {

            addBlankSpace.className = 'space'

        }

        addListItem = phraseList.append(addListItem);
        addBlankSpace = phraseList.append(addBlankSpace);

    }
    return;
}

//Passes our array variable into the function
const gameArray = getRandomPhraseAsArray(gamePhrases);

//Passes our new array into the function that displays it/appends it to the screen
addPhraseToDisplay(gameArray);


//Highlights chosen letters/buttons on click
for (let i = 0; i < entryMade.length; i++) {


    entryMade[i].addEventListener('click', () => {



        entryMade[i].classList.add('chosen');

        if (entryMade[i].className == 'chosen') {

            entryMade[i].disabled = true;

        }


        checkLetter(entryMade[i]);

        checkWin();

    });

}

//Checks if our selection matches the letter in the game above, and if so display it byu changing the class to show
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

        missed = missed + 1;

        liveHeart[missed - 1].src = "images/lostHeart.png"


    }

    return letterFound;
}


//checks if we have won or lost, and gives the option to restart the game
function checkWin() {

    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');

    if (letter.length == show.length) {

        gameTitle.innerHTML = 'Congratualtions! You Win!';
        startGame.textContent = 'Play Again';
        winOverlay = welcomeOverlay.className = 'win';
        welcomeOverlay.style.display = 'flex';

        startGame.addEventListener('click', () => {


            restartGame();

        });


    } else if (missed > 4) {

        gameTitle.innerHTML = 'GAME OVER';
        startGame.textContent = 'Try Again';
        winOverlay = welcomeOverlay.className = 'lose';
        welcomeOverlay.style.display = 'flex';

        startGame.addEventListener('click', () => {

            restartGame();

        });


    }


}

//handles restarting all of our game elements without reloading the page
function restartGame() {

    const list = document.querySelectorAll('ul li');
    missed = 0;

    welcomeOverlay.className = 'start';

    for (let i = 0; i < list.length; i++) {
        list[i].className = "";
        list[i].textContent = "";
    }



    for (let i = 0; i < button.length; i++) {

        button[i].className = '';
        button[i].disabled = false;

    }

    for (let i = 0; i < liveHeart.length; i++) {

        liveHeart[i].src = "images/liveHeart.png";

    }


    const gameArray = getRandomPhraseAsArray(gamePhrases);
    addPhraseToDisplay(gameArray);

}









