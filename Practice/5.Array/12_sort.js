const numbers = [6, 3, 1, 4, 5];
numbers.sort();
console.log(numbers);
numbers.reverse()
console.log(numbers);

//
const course = [
	{ id: 1, name: 'NodeJs'},
	{ id: 2, name: 'JavaScript'}
];

course.sort(function(a,b){

if(a.name < b.name) return -1;
if(a.name > b.name) return 1

});

console.log(course)