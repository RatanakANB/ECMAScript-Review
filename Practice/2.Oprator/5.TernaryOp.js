// If a customer has more than 100 point,
// they are a 'gold' customer, ptherwise,
//they are a 'silver' customer

let point = 110
let type = point >= 100 ? 'gold' : 'silver'


//NOTE - it's the sample of if elif else nested
// let type = point >= 100 ? point >= 200 ?  "gold gold" : " gold " : "silver"

console.log(type);