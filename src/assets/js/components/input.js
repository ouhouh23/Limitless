export class Input {
  constructor (block, input, label) {
    this._block = block
    this._input = input
    this._label = label
  }

  paintLabel (focusColor, blurColor) {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const blockInput = element.querySelector(this._input)
      const blockLabel = element.querySelector(this._label)

      blockInput.onfocus = () => {
        blockLabel.style.color = focusColor
      }

      blockInput.onblur = () => {
        blockLabel.style.color = blurColor
      }
    })
  }
}
