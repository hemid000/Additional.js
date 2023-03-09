const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


// loop example

const num1 = [1, 2, 3];

const num2 = num1.map((el) => {
  let after = { val: el };
  return after;
});
console.log(num2);

const letter = [9, 6, 3, 4];

for (const key in letter) {

  console.log(key);
}
for (const key of letter) {

  console.log(key);
}

var text = " ";
const info = { name: "Hamid", lname: "Yusifli", age: "20" };
const info2 = [1, 2, 3, 4];

for (const key in info) {
  text = text + info[key];
}
console.log(text);

for (const iterator of info2) {
  console.log(iterator);
}

var n1 = 0;
var n2 = 0;

do {
  console.log(n2);
  n2++;
} while (n2 > 10);

// with 


with ([1, 2, 3]) {
  console.log(toString());
}

let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}

console.log(a);



// class, extends , super()


class Color {
  constructor() {
    this.color1 = 'red'
    this.color2 = 'blue'
    this.color3 = 'black'
  }
  printColor() {
    console.log(this.color1, this.color2, this.color3);
  }
}

const color = new Color()

color.printColor()

class Rectangle extends Color {
  constructor(width, height) {
    super()
    this.area = width * height
  }
  printRectangle() {
    console.log(this.area, this);
  }
}

const rectangle = new Rectangle(10, 15);

rectangle.printRectangle();


