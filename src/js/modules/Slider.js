class Slider {
  #slider= null

  #sliderList = null

  #SCROLL_STEP = 60

  constructor(elementId) {
    if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

    this.#slider = document.querySelector(elementId)
    this.#sliderList = this.#slider.querySelector('.slider-list')

    const backBtn = this.#slider.querySelector('.back-btn')
    const forwardBtn = this.#slider.querySelector('.forward-btn')

    backBtn.addEventListener('click', this.slideBackward.bind(this), false)
    forwardBtn.addEventListener('click', this.slideForward.bind(this), false)
  }

  slideBackward() {
    this.#sliderList.scrollLeft += this.#SCROLL_STEP
  }

  slideForward() {
    this.#sliderList.scrollLeft -= this.#SCROLL_STEP
  }
}

export default Slider
