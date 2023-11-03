/**
 * 
 * @param {HTMLElement} contentCards reference to the html element where the cards will be rendered
 * @param {String} card card of the deck extracted, of type string
 * @param {Number} index Position of the array reference to player, 0 is player and 1 is pc
 */
const cardRender = (contentCards, card, index) => {
    const cardImg = document.createElement('img')
    cardImg.src = `/blackjack-app-vite/assets/cartas/${card}.png`
    cardImg.classList.add('cards')
    contentCards[index].append(cardImg)
} 

export { cardRender }