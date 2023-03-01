export class Tabs {
  constructor (block, activeClass) {
    this._block = block
    this._activeClass = activeClass
  }

  initTab () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      if (element.classList.contains(this._activeClass)) {
        return true
      } else {
        element.addEventListener('click', () => {
          element.classList.add(this._activeClass)
        })
      }
    })
  }
}
