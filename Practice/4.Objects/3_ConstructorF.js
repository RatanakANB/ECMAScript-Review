function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  }
}


function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw');
  }
  console.log(radius);
  console.log(this.draw);
}

const circle = new Circle(1)


