const numbers = [1,2,3,4]


numbers1 = numbers
const first = numbers.shift
console.log('first',numbers1);

numbers2 = numbers
const middle = numbers.splice(2,1)
console.log('middle',numbers2);

numbers3 = numbers
const last = numbers.pop
console.log('last',numbers3);



