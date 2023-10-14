class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter method for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Setter method for diameter
  set diameter(value) {
    this.radius = value / 2;
  }

  // Getter method for circumference
  get circumference() {
    return Math.PI * this.diameter;
  }

  // Setter method for circumference
  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  // Getter method for area
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  // Setter method for area
  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}
const circle = new Circle(5);

console.log(circle.diameter); // 10
console.log(circle.circumference); // 31.41592653589793 (approximately)
console.log(circle.area); // 78.53981633974483 (approximately)

circle.diameter = 12;
console.log(circle.radius); // 6

circle.circumference = 37.69911184307752; // Setting circumference
console.log(circle.radius); // 6 (radius should remain the same)

circle.area = 113.09733552923255; // Setting area
console.log(circle.radius); // 6 (radius should remain the same)
