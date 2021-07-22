class Modal {
    #modal= null

    constructor(elementId) {
      if (arguments.length < 1) throw new TypeError('Failed to execute : 1 argument required')

      this.#modal = document.querySelector(elementId)

      const openBtn = document.querySelector('.score');
      const closeBtn = this.#modal.querySelector('.modal-close-btn');

      openBtn.addEventListener('click', this.open.bind(this), false)
      closeBtn.addEventListener('click', this.close.bind(this), false)
    }

    open() {
      this.#modal.classList.add('active')
    }

    close() {
      this.#modal.classList.remove('active')
    }
}

export default Modal
