import { isElement } from 'lodash';
import friends from '../constants/friends'
import FriendList from './FriendList'
import CheckPoints from './CheckPoints'

class Game {
  #friendList = null

  #checkPoints = null

  constructor(elementId) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

    this.#friendList = new FriendList(friends)
    this.#checkPoints = new CheckPoints()

    this.gameContainer = document.querySelector(elementId)
  }

  init() {
    if (isElement(this.gameContainer)) {
      console.log('Hello world!');
    }
  }
}

export default Game
