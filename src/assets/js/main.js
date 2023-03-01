import { Close } from './components/close.js'
import { Input } from './components/input.js'
import { InputCheck } from './components/inputCheck.js'
import { InputSearch } from './components/inputSearch.js'
import { InputDropdown } from './components/inputDropdown.js'
import { Tabs } from './components/tabs.js'
import { Toggles } from './components/toggles.js'
import { Tooltips } from './components/tooltips.js'
import { Carousels } from './components/carousels.js'
import { Counters } from './components/counters.js'
import { Shop } from './components/shop.js'
import { Sliders } from './components/sliders.js'

const allert = new Close('.allert', '.allert__icon_closed')
const modal = new Close('.modal', '.allert__icon_closed')
const announcement = new Close('.announcement', '.announcement__icon')
const checkbox = new InputCheck('.checkbox', '.checkbox__input', 'checkbox_selected', 'checkbox_indeterminate')
const radio = new InputCheck('.radio', '.radio__input', 'radio_selected')
const input = new Input('.input_compact', '.input__body', '.input__label')
const search = new InputSearch('.search', '.search__body', '.search__icon_closed')
const dropdown = new InputDropdown('.dropdown', '.dropdown__menu', '.dropdown__button')
const tab = new Tabs('.tab', 'tab_active')
const toggle = new Toggles('.toggle', '.toggle__input', 'toggle_off')
const mobileNavigation = new Toggles('.navigation', '.navigation__mobile-button', 'navigation_mobile')
const tooltip = new Tooltips('.tooltip', '.tooltip__object', '.tooltip__body', '.tooltip__icon')
const carousel = new Carousels('.carousel', '.carousel__button_left', '.carousel__button_right', '.carousel__gallery', '.carousel__image')
const counter = new Counters('.counter', '.counter__button_increase', '.counter__button_reduce', '.counter__value')
const shop = new Shop(
  '.shop',
  '.shop__filter_sized',
  '.shop__parameter',
  'shop__parameter_active',
  '.shop__filter_colored',
  'shop__parameter_white',
  'shop__parameter_orange',
  '.shop__gallery',
  '.shop__image',
  'shop__image_active',
  '.shop__item'
)
const slider = new Sliders('.slider', '.slider__scale', '.slider__value_current')

document.addEventListener('DOMContentLoaded', () => {
  allert.initClose()
  modal.initClose()
  announcement.initClose()
  checkbox.initCheck()
  radio.initCheck()
  input.paintLabel('#EC6041', 'var(--label-color)')
  search.initReset()
  dropdown.initDropdown()
  tab.initTab()
  toggle.initToggle()
  mobileNavigation.initToggle()
  tooltip.initTooltip()
  carousel.initCarousel('--image-counter', '--carousel-inversion', '--carousel-image-width')
  counter.initCount()
  shop.initShop()
  slider.initSlider()
})
