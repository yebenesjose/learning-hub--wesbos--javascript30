const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
const pointerStroke = document.querySelector('#stroke')
const strokeInfo = document.querySelector('.strokeinfo')

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 1

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0

const draw = (e) => {
  if (!isDrawing) return

  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  lastX = e.offsetX
  lastY = e.offsetY
  hue++
}
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})

// Stroke width manual picker, just because I wanted to
const strokeSetter = (e) => {
  strokeInfo.textContent = `Pointer stroke = ${e.target.value} 🔥`
  ctx.lineWidth = e.target.value
}
pointerStroke.addEventListener('change', strokeSetter)

