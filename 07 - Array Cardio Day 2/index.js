console.log('hello')

// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'Ramon', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentDate = new Date()
const seconds = currentDate.getSeconds()
const minutes = currentDate.getMinutes()
const hours = currentDate.getHours()
const day = currentDate.getDate()
const month = currentDate.getMonth() + 1
const year = currentDate.getFullYear()

const someOlderPeople = people.some((person) => {
  const age = year - person.year
  // console.log(person.name, person.year, age)
  return age >= 19
})
console.log('output of "some()" is:', someOlderPeople)

// Array.prototype.every() // is everyone 19 or older?
const everyOlderPeople = people.every((person) => {
  const age = year - person.year
  // console.log(person.name, person.year, age)
  return age >= 19
})
console.log('output of "every()" is:', everyOlderPeople)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const specificComment = comments.find((comment) => {
  return comment.id === 823423
})
console.log(specificComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => {
  return comment.id === 823423
})
console.log(index)

const arrayDeletedId = [...comments.slice(0, index), ...comments.slice(index + 1)]
console.log(arrayDeletedId)