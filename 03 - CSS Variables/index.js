console.log('HELLOOOO 03')

const controls = document.querySelectorAll('.controls input')
console.log(controls)

// const controlHandler = (e) => {
//   console.log(e.target.value)
// }
// controls.forEach(control => {
//   control.addEventListener('change', controlHandler)
// })



const controlsParent = document.querySelector('.controls')
console.log(controlsParent)

const controlChilds = (e) => {
  const suffix = e.target.dataset.sizing || ''
  console.log(e.target.value)
  document.documentElement.style.setProperty(`--${e.target.id}`, `${e.target.value}${suffix}`)
}
controlsParent.addEventListener('change', controlChilds)