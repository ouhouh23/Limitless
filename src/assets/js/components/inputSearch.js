export class InputSearch {
  constructor (block, input, closeButton) {
    this._block = block
    this._input = input
    this._closeButton = closeButton
  }

  initReset () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const closeItem = element.querySelector(this._closeButton)
      const blockInput = element.querySelector(this._input)

      closeItem.addEventListener('click', () => {
        blockInput.value = ''
      })
    })
  }
}
