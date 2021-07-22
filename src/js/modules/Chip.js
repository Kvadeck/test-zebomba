import { isElement } from 'lodash'
import points from '../data/points'

class Chip {

  #chip = null
  #button = null

  #stepId = 0
  #maxStep = 10

  constructor(elementId) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')
    
    this.#chip = document.querySelector(elementId)
    this.#button = document.querySelector('.university')

    this.#button.addEventListener('click', this.step.bind(this), false)
    this.#chip.addEventListener('animationend', this.saveCurrentPoint.bind(this))
  }

  step() {
    if (this.#stepId >= this.#maxStep) return
    
    if (isElement(this.#chip)) {
        this.#chip.style.animation = `chip-step-${this.#stepId} 0.7s linear forwards`
    }
  }

  saveCurrentPoint() {
    const point = `left: ${points[this.#stepId].x}px; top: ${points[this.#stepId].y}px;`
    this.#chip.style = point
    this.#stepId++
  }
}

export default Chip