console.log('HELLOOOO')

const musicToMyEars = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}
globalThis.addEventListener('keydown', musicToMyEars)

// using parent element eventListener propagation
const keysParent = document.querySelector('.keys')

const removeClass = (event) => {
  const key = event.target.closest('.key')
  key.classList.remove('playing')
}
keysParent.addEventListener('transitionend', removeClass)

// using eventListener in each keyChild element
// const keysChilds = [...document.querySelectorAll('.key')]

// const removeClass2 = (event) => {
//   event.target.classList.remove('playing')
// }
// keysChilds.forEach((key) => {
//   key.addEventListener('transitionend', removeClass2)
// })