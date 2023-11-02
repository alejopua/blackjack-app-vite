// import createDeck, { myname } from '../usecases/create-deck.js';
// import { createDeck as mydeck } from '../usecases/create-deck.js';
import { cardRender, createDeck,points , resultPlayers, takeCard, } from '../usecases';

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
*/

const myModule = (() => {
    'use strict'
    let   deck     = [];
    const types    = ['C', 'D', 'H', 'S'], specials = ['A', 'J', 'K', 'Q'];
    let   pointPlayers = [];

    // References HTML
    const btnHit = document.querySelector('#btnHit'),
            smallPoints = document.querySelectorAll('small'),
            contentCards = document.querySelectorAll('#cardsContent'),
            btnStop = document.querySelector('#btnStop'),
            btnNew = document.querySelector('#btnNew');

    // initialize game
    const initialize = (numberPlayers = 2) => {
        pointPlayers = [];
        deck = createDeck(types, specials);
        for (let i = 0; i < numberPlayers; i++) {
            pointPlayers.push(0)
        }

        smallPoints.forEach(item => item.innerText = 0)
        contentCards.forEach(item => item.innerHTML = '')

        btnHit.disabled = false;
        btnStop.disabled = false;
    }

    // This function create a new deck, shuffled
    deck = createDeck(types, specials);

    const pcGame = (py) => { // this function is for the logic pc game
        let pc = 0
        do {        
            const card = takeCard(deck)
            pc = points(smallPoints, pointPlayers, card, 1)
            cardRender(contentCards, card, 1)
            if (pc >= 21) {
                break;
            }
        } while ((pc < py) && (py <= 21) && (pc < 21))
        return pointPlayers
    }

    btnHit.addEventListener('click', () => { // this event is for the logic player game
        const card = takeCard(deck);
        const py = points(smallPoints, pointPlayers, card, 0);
        cardRender(contentCards, card, 0)
        resultPlayers(py, (py > 21 || py === 21 ? pcGame(py): null) , btnHit, btnStop)
        return pointPlayers
    })

    btnStop.addEventListener('click', () =>{ // this event is for the logic pc game
        btnHit.disabled = true
        btnStop.disabled = true
        pcGame(pointPlayers[0])
        resultPlayers(pointPlayers[0], pointPlayers[1], btnHit, btnStop)
    })

    btnNew.addEventListener('click', () => { // this event is for the logic new game
        initialize();
    });

    return {
        newGame: initialize
    }

})();

