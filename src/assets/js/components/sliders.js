export class Sliders {
  constructor (block, blockScale, blockValue) {
    this._block = block
    this._blockScale = blockScale
    this._blockValue = blockValue
  }

  initSlider () {
    const blocks = document.querySelectorAll(this._block)

    if (blocks === null) {
      return
    }

    blocks.forEach(element => {
      const sliderScale = element.querySelector(this._blockScale)
      const sliderValue = element.querySelector(this._blockValue)
      let sliderCount = sliderScale.value

      sliderValue.style.width = `calc(${sliderCount}% + 0.4rem`
      sliderScale.style.background = `linear-gradient(to right, #EC6041 ${sliderCount}%, #e0e0e0 ${sliderCount}% 100%)`

      sliderScale.oninput = () => {
        sliderCount = sliderScale.value
        sliderValue.innerHTML = sliderCount

        if (sliderScale.value < 40) {
          sliderValue.style.width = `calc(${sliderCount}% + 0.8rem`
        } else if (sliderScale.value < 60) {
          sliderValue.style.width = `calc(${sliderCount}% + 0.5rem`
        } else if (sliderScale.value < 80) {
          sliderValue.style.width = `calc(${sliderCount}% + 0.2rem`
        } else {
          sliderValue.style.width = `calc(${sliderCount}% - 0.2rem`
        }

        sliderScale.style.background = `linear-gradient(to right, #EC6041 ${sliderCount}%, #e0e0e0 ${sliderCount}% 100%)`
      }
    })
  }
}
