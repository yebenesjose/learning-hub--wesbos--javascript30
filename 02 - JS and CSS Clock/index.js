console.log('HELLO')

const hoursHandler = document.querySelector('.hour-hand')
const minutesHandler = document.querySelector('.min-hand')
const secondsHandler = document.querySelector('.second-hand')

const setTime = () => {
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondsHandler.style.transform = `rotate(${secondsDegrees}deg)`

  const minutesDegrees = ((minutes / 60) * 360) + 90
  minutesHandler.style.transform = `rotate(${minutesDegrees}deg)`

  const hoursDegrees = ((hours / 12) * 360) + 90
  hoursHandler.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setTime, 1000)
setTime()