export class Close {
  constructor (block, closeButton) {
    this._block = block
    this._closeButton = closeButton
  }

  initClose () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const closeItem = element.querySelector(this._closeButton)

      closeItem.addEventListener('click', () => {
        element.style.display = 'none'
      })
    })
  }
}
