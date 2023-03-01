export class Toggles {
  constructor (block, item, toggleClass) {
    this._block = block
    this._item = item
    this._toggleClass = toggleClass
  }

  initToggle () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const blockTarget = element.querySelector(this._item)

      blockTarget.addEventListener('click', () => {
        element.classList.toggle(this._toggleClass)
      })
    })
  }
}
