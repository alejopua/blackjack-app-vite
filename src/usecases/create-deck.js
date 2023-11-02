import { shuffle } from 'underscore';

// This function create a new deck, shuffled
/**
 * 
 * @param {Array<String>} types example: ['C', 'D', 'H', 'S']    
 * @param {Array<String>} specials example: ['A', 'J', 'K', 'Q']
 * @returns {Array<String>} create a deck array of cards
 */
const createDeck = (types, specials) => {

    if (!types || types.length === 0 || !specials || specials.length === 0) 
        throw new Error('types and specials are required as an array string');
    let deck = [];
    for (let i = 2; i <= 10; i++) { // This loop allows us to create the number cards of the deck (2, 3, 4, 5, 6, 7, 8, 9, 10 for each types)
        for (const type of types) {
            deck.push(i + type);
        }
    }

    for (const type of types) { // Create the special cards of the deck (A, J, K, Q for each specials)
        for (const special of specials) {
            deck.push(special + type);
        }
    }
    return shuffle(deck);
}

export { createDeck }