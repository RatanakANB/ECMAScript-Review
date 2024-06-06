const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
}

// for (let key in circle)
//   console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//   console.log(key);

//   for (let entry of Object.entries(circle))
//     console.log(entry)

// const another = Object.assign({
//   color: 'yellow'
// }, circle)

// const another = Object.assign({},circle)

const another = {...circle}

console.log(another);