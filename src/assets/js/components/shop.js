export class Shop {
  constructor (
    block,
    sizesBlock,
    parameter,
    parameterActive,
    colorBlock,
    colorFirst,
    colorSecond,
    imageBlock,
    imageItem,
    imageItemActive,
    shopItem
  ) {
    this._block = block
    this._parameter = parameter
    this._parameterActive = parameterActive
    this._sizesBlock = sizesBlock
    this._colorBlock = colorBlock
    this._colorFirst = colorFirst
    this._colorSecond = colorSecond
    this._imageBlock = imageBlock
    this._imageItem = imageItem
    this._imageItemActive = imageItemActive
    this._shopItem = shopItem
  }

  initShop () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    const setActiveClass = (target, activeClassName, parentBlock) => {
      if (target.classList.contains(activeClassName)) {
        return
      }

      const oldActiveClass = parentBlock.querySelector(`.${activeClassName}`)

      oldActiveClass.classList.remove(activeClassName)
      target.classList.add(activeClassName)
    }

    const selectItemSize = (parentBlock) => {
      const shopSizesBlock = parentBlock.querySelector(this._sizesBlock)
      const shopSizeArray = shopSizesBlock.querySelectorAll(this._parameter)

      shopSizeArray.forEach(element => {
        element.addEventListener('click', () => {
          setActiveClass(element, this._parameterActive, shopSizesBlock)
        })
      })
    }

    const selectItem = (parentBlock) => {
      const shopColorsBlock = parentBlock.querySelector(this._colorBlock)
      const shopColorFirst = shopColorsBlock.querySelector(`.${this._colorFirst}`)
      const shopColorSecond = shopColorsBlock.querySelector(`.${this._colorSecond}`)
      const shopItemsBlock = parentBlock.querySelector(this._imageBlock)
      const shopItemsArray = shopItemsBlock.querySelectorAll(this._imageItem)
      const itemChosen = parentBlock.querySelector(this._shopItem)

      const selectItemImage = () => {
        const colorCheck = (item) => {
          if (item === shopItemsArray[0]) {
            return 1
          } else {
            return 2
          }
        }

        shopItemsArray.forEach(element => {
          element.addEventListener('click', () => {
            if (element.classList.contains(this._imageItemActive)) {
              return
            }

            const itemSrc = element.src

            itemChosen.src = itemSrc

            if (colorCheck(element) === 1) {
              shopColorFirst.classList.add(this._parameterActive)
              shopColorSecond.classList.remove(this._parameterActive)
            } else {
              shopColorFirst.classList.remove(this._parameterActive)
              shopColorSecond.classList.add(this._parameterActive)
            }

            setActiveClass(element, this._imageItemActive, shopItemsBlock)
          })
        })
      }
      selectItemImage()

      const selectItemColor = () => {
        const shopColorsArray = shopColorsBlock.querySelectorAll(this._parameter)

        shopColorsArray.forEach(element => {
          element.addEventListener('click', () => {
            if (element.classList.contains(this._parameterActive)) {
              return
            }

            if (element.classList.contains(this._colorFirst)) {
              const whiteItemSrc = shopItemsArray[0].src

              itemChosen.src = whiteItemSrc

              const oldShopItem = shopItemsBlock.querySelector(`.${this._imageItemActive}`)

              oldShopItem.classList.remove(this._imageItemActive)
              shopItemsArray[0].classList.add(this._imageItemActive)
            } else {
              const OrangeItemSrc = shopItemsArray[1].src

              itemChosen.src = OrangeItemSrc

              const oldShopItem = shopItemsBlock.querySelector(`.${this._imageItemActive}`)

              oldShopItem.classList.remove(this._imageItemActive)
              shopItemsArray[1].classList.add(this._imageItemActive)
            }

            setActiveClass(element, this._parameterActive, shopColorsBlock)
          })
        })
      }
      selectItemColor()
    }

    blocks.forEach(element => {
      selectItemSize(element)
      selectItem(element)
    })
  }
}
