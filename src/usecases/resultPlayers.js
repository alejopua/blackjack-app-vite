/**
 *  this function is responsible for determining the winner of the game
 * @param {Number} py number the points of player py
 * @param {Number} pc number the points of player pc
 * @param {HTMLElement} btnHit element html with button hit
 * @param {HTMLElement} btnStop element html with button stop
 */
const resultPlayers = (py, pc, btnHit, btnStop) => {
    if (py > 21) {
        setTimeout(() => {
            alert('Perdiste')
        }, 300);
        btnHit.disabled = true
        btnStop.disabled = true
    } else if (pc === 21 || (pc < 21 && py < 21 && pc > py)) {
        setTimeout(() => {
            alert('Perdiste')
        }, 300);
        btnHit.disabled = true
        btnStop.disabled = true
    } else if (py === 21 || (py <= 21 && pc > 21 && py < pc)) {
        setTimeout(() => {
            alert('Ganaste')
        }, 300);
        btnHit.disabled = true
        btnStop.disabled = true
    } else if (py === pc && py <= 21 && pc <= 21) {
        setTimeout(() => {
            alert('Empate')
        }, 300);
        btnHit.disabled = true
        btnStop.disabled = true
    } 

}

export { resultPlayers }