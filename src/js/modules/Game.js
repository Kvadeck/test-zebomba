import { isElement } from 'lodash';
import Chip from './Chip'
import GameView from './GameView';
import Slider from './Slider';
import Modal from './Modal';

class Game {
  #gameBox = null

  #chip = null

  #gameView = null

  #slider = null

  #modal = null

  constructor(elementId) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

    this.#gameBox = document.querySelector(elementId)
  }

  init() {
    if (isElement(this.#gameBox)) {
      this.#gameView = new GameView(this.#gameBox)
      this.#slider = new Slider('#slider')
      this.#modal = new Modal('#modal')
      this.#chip = new Chip('.chip')
    }
  }
}

export default Game
