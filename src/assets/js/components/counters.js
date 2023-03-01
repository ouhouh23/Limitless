export class Counters {
  constructor (block, buttonIncrease, buttonReduce, blockValue) {
    this._block = block
    this._buttonIncrease = buttonIncrease
    this._buttonReduce = buttonReduce
    this._blockValue = blockValue
  }

  initCount () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const increaseButton = element.querySelector(this._buttonIncrease)
      const reduceButton = element.querySelector(this._buttonReduce)
      const valueElement = element.querySelector(this._blockValue)
      let currentValue = ~~valueElement.innerHTML

      const count = (increment) => {
        currentValue = ~~valueElement.innerHTML
        currentValue += increment
        valueElement.innerHTML = currentValue
      }

      increaseButton.addEventListener('click', () => {
        count(1)
      })

      reduceButton.addEventListener('click', () => {
        if (currentValue > 0) {
          count(-1)
        }
      })
    })
  }
}
