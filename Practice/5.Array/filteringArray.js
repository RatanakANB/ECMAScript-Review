const numbers = [1,-1,2,3]
const filtered = numbers.filter(function(value) {
  return value >= 0
})
console.log(filtered);

const number = [1,-1,2,3]
const filters = number.filter(n => n >= 0)
console.log(filters)