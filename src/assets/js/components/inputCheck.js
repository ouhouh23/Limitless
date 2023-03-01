export class InputCheck {
  constructor (block, input, activeClass, indeterminateClass) {
    this._block = block
    this._input = input
    this._activeClass = activeClass
    this._indeterminateClass = indeterminateClass
  }

  initCheck () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const blockInput = element.querySelector(this._input)

      blockInput.addEventListener('change', () => {
        if (element.classList.contains(this._indeterminateClass)) {
          element.classList.toggle(this._indeterminateClass)
        } else {
          element.classList.toggle(this._activeClass)
        }
      })
    })
  }
}
