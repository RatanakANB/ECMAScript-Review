const course = [
  { id: 1, name: "a" },
  { id: 2, name: "b" }
];

const course1 = course.find(function(course1) {
  return course1.name === "a";
});

const course2 = course.findIndex(function(course2) {
  return course2.name === "b";
});

console.log(course);
console.log(course1);
console.log(course2);