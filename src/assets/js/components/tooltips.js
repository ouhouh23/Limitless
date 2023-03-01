export class Tooltips {
  constructor (block, object, body, closeButton) {
    this._block = block
    this._object = object
    this._body = body
    this._closeButton = closeButton
  }

  initTooltip () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const blockObject = element.querySelector(this._object)
      const blockBody = element.querySelector(this._body)
      const closeItem = element.querySelector(this._closeButton)

      blockObject.addEventListener('click', () => {
        blockBody.style.display = 'flex'
      })

      closeItem.addEventListener('click', () => {
        blockBody.style.display = 'none'
      })
    })
  }
}
