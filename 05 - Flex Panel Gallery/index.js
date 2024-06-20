console.log('hey')

const panelFather = document.querySelector('.panels')

const classHandle = (e) => {
  const panel = e.target.closest('.panel')
  const panelOpen = panel.classList.contains('open')
  const allPanels = document.querySelectorAll('.panel')

  allPanels.forEach(panel => panel.classList.remove('open'))

  panel.classList.toggle('open')

  if (panelOpen) {
    panel.classList.remove('open')
  }
  panelOpen ? panel.classList.remove('open') : panel.classList.add('open')
}
panelFather.addEventListener('click', classHandle)