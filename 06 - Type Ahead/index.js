/*
//////////////////////////////////////////////////////////  
// Fetch DATA from API
// without really taking into account options object
//////////////////////////////////////////////////////////
*/
const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const options = {}

const fetchData = async (url) => {
  try {
    const res = await fetch(URL, options)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const response = await res.json()
    return response
  }
  catch (error) {
    console.error('fetch error:', error)
  }
}
const data = await fetchData(URL)
console.log(data)
////////////////////////////////////////////////////////// 

// as a 1rst iteration -- display all the locations from the API data within <li> elements
const suggestionsContainer = document.querySelector('.suggestions')

/* data.forEach(data => {
  const cityElement = document.createElement('li')
  cityElement.textContent = data.city

  const populationElement = document.createElement('span')
  populationElement.classList = 'population'
  populationElement.textContent = Number(data.population).toLocaleString('en-US')

  cityElement.appendChild(populationElement)
  suggestionsContainer.appendChild(cityElement)
}) */

// handle user input + filter API data based on user input
const input = document.querySelector('.search')
const filterFn = (e) => {
  suggestionsContainer.innerHTML = ''
  const userInput = e.target.value.toLowerCase()

  const renderedElements = data.map((city) => {
    const cityName = city.city.toLowerCase()
    const populationData = Number(city.population).toLocaleString('en-US')
    const stateName = city.state.toLowerCase()

    if (cityName.includes(userInput) || stateName.includes(userInput)) {
      const cityElement = document.createElement('li')
      cityElement.textContent = cityName

      const populationElement = document.createElement('span')
      populationElement.classList = 'population'
      populationElement.textContent = populationData

      cityElement.appendChild(populationElement)
      suggestionsContainer.appendChild(cityElement)
    }
  })

  return renderedElements
}
input.addEventListener('change', filterFn)
input.addEventListener('keyup', filterFn)


