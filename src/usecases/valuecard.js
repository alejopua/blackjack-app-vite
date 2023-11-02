/**
 * 
 * @param {String} card type string card example: '2C', '3D', '4H', '5S', 'AS', 'JS', 'QS', 'KS'
 * @returns {Number} value of the card of type Number example: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11(A), 10(J, Q, K)
 */
const valueCard = (card) => {
    const cardValue = card.substring(0, card.length - 1); // extract the value of the card (2, 3, 4, 5, 6, 7, 8, 9, 10, A, J, K, Q)
    return Number(cardValue) ? parseInt(cardValue) // If the card is a number, return the number
        : cardValue === 'A' ? 11  // If the card is A, return 11  if else return 10
        : 10
}

export { valueCard }