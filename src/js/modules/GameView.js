import Helpers from '../helpers';

class GameView {
  constructor(rootEl) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

    const gameDiv = Helpers.createElement('div', { class: 'game' })
    const sliderDiv = Helpers.createElement('div', { class: 'slider' })

    rootEl.appendChild(gameDiv)
    rootEl.appendChild(sliderDiv)

    console.log(gameDiv)
  }
}

export default GameView
