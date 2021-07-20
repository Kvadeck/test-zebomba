import { isElement } from 'lodash'
import points from '../data/points'

// TODO: Проверить много кликов на кнопке сразу

class Chip {

  // #isMoving = false
  #chip = null
  #button = null

  #stepId = 0
  #maxStep = 10

  constructor(elementId) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')
    
    this.#chip = document.querySelector(elementId)
    this.#button = document.querySelector('.university')

    if (isElement(this.#button)) this.#button.addEventListener('click', this.step, false)
    this.chip.addEventListener('animationend', this.saveStep)
  }

  step() {
    if (this.#stepId >= this.#maxStep) return
    
    if (isElement(this.#chip)) {
        this.chip.style.animation = `chip-step-${this.#stepId} 0.7s linear forwards`
    }
  }

  saveCurrentPoint() {
    const point = `left: ${points[id].x}px; top: ${points[id].y}px;`
    this.#chip.style = point
    this.#stepId++
  }
}

export default Chip