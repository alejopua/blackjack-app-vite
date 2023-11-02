import { valueCard } from './index'
/**
 * 
 * @param {Array<String>} pointPlayers array with points of players
 * @param {HTMLElement} smallPoints  element html for render point players
 * @param {String} card card of the deck of type string
 * @param {Number} index number the position of the array reference to player, 0 is player and 1 is pc
 * @returns {Number} point of player type number
 */
const points = (smallPoints, pointPlayers, card, index) => {
    pointPlayers[index] += valueCard(card)
    smallPoints[index].innerText = pointPlayers[index]
    return pointPlayers[index]
}

export { points }