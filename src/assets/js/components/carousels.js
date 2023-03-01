export class Carousels {
  constructor (
    block,
    buttonLeft,
    buttonRight,
    blockBody,
    blockItem
  ) {
    this._block = block
    this._buttonLeft = buttonLeft
    this._buttonRight = buttonRight
    this._blockBody = blockBody
    this._blockItem = blockItem
  }

  initCarousel (start, inversion, imageWidth) {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const toLeft = element.querySelector(this._buttonLeft)
      const toRight = element.querySelector(this._buttonRight)
      const blockGallery = element.querySelector(this._blockBody)
      const items = blockGallery.querySelectorAll(this._blockItem)
      const itemsAmount = items.length
      let itemCounter = ~~window.getComputedStyle(blockGallery).getPropertyValue(start)
      let blockInversion = ~~window.getComputedStyle(blockGallery).getPropertyValue(inversion)

      toRight.addEventListener('click', () => {
        if (itemCounter < itemsAmount) {
          const itemWidth = ~~window.getComputedStyle(blockGallery).getPropertyValue(imageWidth)

          blockInversion = blockInversion - itemWidth
          blockGallery.style.transform = `translateX(${blockInversion}%)`
          itemCounter += 1
        }
      })

      toLeft.addEventListener('click', () => {
        if (itemCounter > 1) {
          const itemWidth = ~~window.getComputedStyle(blockGallery).getPropertyValue(imageWidth)

          blockInversion = blockInversion + itemWidth
          blockGallery.style.transform = `translateX(${blockInversion}%)`
          itemCounter -= 1
        }
      })
    })
  }
}
