// Hour 
// if hour is between 6am and 12 pm: good morning
// if it is between 12pm and 6pm: good afternoon
// otherwise: Good evening

let hour = 17

if (hour >= 6 && hour < 12) {
  console.log('Good morning');
} else if ( hour >= 12 && hour < 18 ) {
  console.log('Good Afternoon');
}  else {
  console.log('Good Evening');
}