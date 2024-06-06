const course = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

const course1 = course.find(course => course.name === 'a')
const course2 = course.findIndex(course => course.name === 'a')

console.log(course);
console.log(course1);
console.log(course2);