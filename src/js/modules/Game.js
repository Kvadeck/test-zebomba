import { isElement } from 'lodash';
import friends from '../data/friends'
import FriendList from './FriendList'
import Chip from './Chip'
import GameView from './GameView';

class Game {
  #friendList = null

  #chip = null

  #gameView = null

  constructor(elementId) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

    this.#friendList = new FriendList(friends)

    this.gameBox = document.querySelector(elementId)
  }

  init() {
    if (isElement(this.gameBox)) {
      this.#gameView = new GameView(this.gameBox)

      // this.#chip = new Chip()
      // console.log('Hello world!')
    }
  }
}

export default Game
