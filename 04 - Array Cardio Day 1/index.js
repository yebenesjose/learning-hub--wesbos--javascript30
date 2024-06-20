console.log('helooou ☀️')

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsAbove = inventors.filter((inventor) => {
  // overcomplication below: converting to a string, slicing... lol ⤵️ 
  ////////////////////////////////////////////////////////////////////
  // const inventorYear = inventor.year
  // const inventorYearFull = inventorYear.toString()
  // const inventorYearPart = inventorYearFull.toString().slice(0, 2)

  // if (inventorYearPart.includes('15')) {
  //   return inventor
  // }
  ////////////////////////////////////////////////////////////////////

  // it can be done as easy as 
  return inventor.year >= 1500 && inventor.year <= 1599
})
console.log(inventorsAbove)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsNaming = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`
})
console.log(inventorsNaming)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventorsByBirth = inventors.toSorted((a, b) => {
  return a.year - b.year
})
console.log(sortedInventorsByBirth)
//// 3.1 Sort the inventors by age, oldest to youngest // complejizar porque quiero
const sortedInventorsByAge = inventors.toSorted((a, b) => {
  const aAge = a.passed - a.year
  const bAge = b.passed - b.year
  return aAge - bAge
})
console.log(sortedInventorsByAge)
//// 3.2 Create a new array whhere all the inventors have a new property called age, displaying the age calc by passed - year && sort it by age (younger to older)
const newInventors = inventors
  .map((inventor) => {
    return { ...inventor, age: Number(`${inventor.passed - inventor.year}`) }
  })
  .toSorted((a, b) => {
    return a.age - b.age
  })
console.log(newInventors)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumAgesInventors = inventors.reduce((accumulator, inventor) => {
  const age = inventor.passed - inventor.year
  return accumulator += age

}, 0)
console.log(sumAgesInventors)

//// 4.1 Using the object created before that has the property age
let agesInventorsTotal = 0
newInventors.forEach((inventor) => {
  return agesInventorsTotal += inventor.age
})
console.log(agesInventorsTotal)

// 5. Sort the inventors by years lived
const sortedByAgesLived = inventors.toSorted((a, b) => {
  const aAge = a.passed - a.year
  const bAge = b.passed - b.year
  return aAge - bAge
})
console.log(sortedByAgesLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = document.querySelectorAll('.mw-category-group > ul > li')

const boulevardsWithDE = [...boulevards].filter((boulevard) => {
  return boulevard.textContent.includes('de')
})
// boulevardsWithDE.forEach(boulevard => console.log(boulevard.textContent))

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
// 7. sort Exercise
// Sort the people alphabetically by last name


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const occurencesItems = data.reduce((acc, item) => {
  //// using nullish coalescing operator
  // acc[item] = (acc[item] ?? 0) + 1;

  //// using if else statement
  // if (acc[item]) {
  //   acc[item]++;
  // } else {
  //   acc[item] = 1;
  // }

  //// using ternary operator
  acc[item] = acc[item] ? acc[item] + 1 : 1
  return acc
}, {})
console.log(occurencesItems)

//// 8.1 then you can group it by the amount of times it appear
////// first convert it to an array of objects
console.log(Object.entries(occurencesItems))
const arrayObj = Object.entries(occurencesItems).map((array) => {
  const key = array[0]
  const val = array[1]
  return { key, val }
})
console.log(arrayObj)

////// then you can use groupBy()
const groupingFn = ({ val }) => {
  return val >= 5 ? 'above or equal to 5' : 'below 5'
}
const grouping = Object.groupBy(arrayObj, groupingFn)
console.log(grouping)