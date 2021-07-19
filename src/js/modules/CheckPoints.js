import points from '../constants/points'

class CheckPoints {
  #points = null

  #idx = 0

  constructor() {
    this.#points = points
  }

  step() {
    return this.#points[this.#idx++]
  }
}

export default CheckPoints
