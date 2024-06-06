const first = [1, 2, 3];
const second = [4,5 ,6];

const combined = first.concat(second);

const slice = combined.slice(2,4);

console.log(combined);
console.log(slice);

const first1 = [{id:1}];
const second1 = [4,5 ,6];

const combined1 = first1.concat(second1)
first1[0].id = 10

const slice1 = combined1.slice()

console.log(combined1);
console.log(slice1);