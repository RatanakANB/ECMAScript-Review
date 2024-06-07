const numbers = [1,2,3]
const allPositive = numbers.every(function(value) {
  return value >= 0 
})
console.log(allPositive);

const number = [1,2,-1,3]
const AtLeastOneNegative = number.some(function(value) {
  return value >= 0 
})
console.log(AtLeastOneNegative);