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

const keysParent = document.querySelector('.keys')

const removeClass = (event) => {
  if (event.target.classList.contains('key')) {
    event.target.classList.remove('playing')
  }
}

keysParent.addEventListener('transitionend', removeClass)