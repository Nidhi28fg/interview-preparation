/*This task will take some time to complete.*/
const fs = require('fs');
/*Node.js built-in fs module, which provides functions for working with the file system.
Node.js फ़ाइल सिस्टम मॉड्यूल आपको अपने कंप्यूटर पर फ़ाइल सिस्टम के साथ काम करने की अनुमति देता है।
फ़ाइल सिस्टम मॉड्यूल को शामिल करने के लिए, require()निम्न विधि का उपयोग करें:*/
function print(err, data) {
  console.log(data);
}


function print(err, data) {
  if (err) {
    console.log("File not found!");
  } else {
    console.log(data);
  }
}


const data = fs.readFileSync('./a.txt', 'utf8');  /*file name,  utf8 translates numbers into binary.*/ 
console.log(data); /* in node.js you can run file locally */
const data2 = fs.readFileSync('b.txt', 'utf8');  /*file name*/
console.log(data2);

fs.readFile("a.txt", "utf-8", print); // Asynchronous The print function is passed as a callback to handle the result.
fs.readFile("b.txt", "utf-8", print); // Asynchronous

function readFile(filePath, encoding, op) {
  // ... read file logic ...
  op("Error!!", "hi there");
}


let ans = 0;
for (let i = 1; i <= 2; i++) {
  ans = ans + i;
  //First Iteration (i = 1):
  //ans = ans + i becomes ans = 0 + 1, so ans becomes 1.
  // Second Iteration (i = 2):
  //ans = ans + i becomes ans = 1 + 2, so ans becomes 3.*/
}

console.log(ans);







function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;         //1/2
}
function doOperation(a, b, op) {
  let val = op(a, b);  //divide(1,2)
  return val;
}
const ans = doOperation(1, 2, divide);
console.log(ans);





console.log("Hi!");
function timeout() {
  console.log("Click the button!");
}
setTimeout(timeout, 15000); //The timeout callback function is scheduled to run after 15 seconds.
console.log("Welcome to loupe.");

// Therefore, the output in the console will be:
// Hi!
// Welcome to loupe.
// [15 seconds later]
// Click the button!







class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }
    paint() {
        console.log(`Painting with color ${this.color}`);
    }
}
const rect = new Rectangle(2, 4);
const area = rect.area();
console.log(area);
/*Key Concepts
Class Declaration:
You declare a class using the class keyword.
Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.
**Constructor:**
A special method inside the class that is called when you create an instance (an object) of the class.
It’s used to initialize the properties of the object.
**Methods:**
Functions that are defined inside the class and can be used by all instances of the class.
**Inheritance:**
Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.
**Static Methods:**
Methods that belong to the class itself, not to class instances. You call them directly on the class.
Getters and Setters:
Special methods that allow you to define how properties are accessed and modified.*/














