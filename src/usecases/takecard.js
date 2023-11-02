// This function allows us to take a card
/**
 * @@param {Array<String>} deck example: ['2C', '3D', '4H', '5S', '6C', '7D', '8H', '9S', '10C', 'AC', 'JC', 'KC', 'QC']
 * @returns {String} return value the string card
 */

const takeCard = (deck) => {
    const lengthArray = deck.length; // Allows us to know the length of the array
    if (!deck || lengthArray === 0) { // If the length of the array is 0, exhibit message there aren't more cards
        throw 'No more cards in the deck';
    }
    const randomNumber = Math.floor(Math.random() * (lengthArray)); // Allows us to know a random number the card
    return deck.splice(randomNumber, 1).join('') // Remove the card from the deck and return value the card
}

export { takeCard }