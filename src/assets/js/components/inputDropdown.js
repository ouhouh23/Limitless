export class InputDropdown {
  constructor (block, input, closeButton) {
    this._block = block
    this._input = input
    this._closeButton = closeButton
  }

  initDropdown () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const blockInput = element.querySelector(this._input)
      const closeItem = element.querySelector(this._closeButton)

      closeItem.addEventListener('click', () => {
        if (blockInput.style.display === 'block') {
          blockInput.style.display = 'none'
        } else {
          blockInput.style.display = 'block'
        }
      })
    })
  }
}
