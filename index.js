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
function timeout() {     //callback the main function (callback main fuction)
  console.log("Click the button!");
}
setTimeout(timeout, 15000); //The timeout callback function is scheduled to run after 15 seconds.
console.log("Welcome to loupe.");

// Therefore, the output in the console will be:
// Hi!
// Welcome to loupe.
// [15 seconds later]
// Click the button!






// Static methods are powerful tools in object-oriented programming. Understanding their purpose and usage allows you to write more organized, efficient, and reusable code.
class Rectangle {
    constructor(width, height, color) {
        this.width = width; //react.width
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
**Class Declaration:** You declare a class using the class keyword.
Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.
**Constructor:** A constructor is a special method inside a class. It's called when you create an instance (an object) of the class. 
The constructor is used to initialize the properties of the object.
**Methods:** Functions that are defined inside the class and can be used by all class instances.
**Inheritance:** Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.
**Static Methods:** Methods that belong to the class itself, not to class instances. You call them directly in the class.
**Getters and Setters:** Special methods that allow you to define how properties are accessed and modified.*/

//Inheritance in classes -Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. T
//his mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.


const date = new Date();
console.log(date.getFullYear());
console.log(date):



let user = {
  name: "harkirat",
  age: 21
};
console.log(user.name);
user.name = "raman"; //changes the value of the name property to "raman". Now, the user object has the following properties: name: "raman"


const map = new Map(); //Maps are a powerful data structure in JavaScript that allow you to store key-value pairs. 
map.set('name', 'Alice'); //Maps can use numbers, strings, objects, or any other data type as keys.
map.set('age', 30);
console.log(map.get('name'));
const firstName = map.get('name'); //OTHER METHOD TO WRITE
console.log(firstName);



//Promises provide a structured way to handle asynchronous operations in JavaScript, making your code more reliable and efficient.
// States of a Promise:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Operation completed successfully, and the promise has value.
// Rejected: Operation failed, and the promise has a reason for failure.

// Key Concepts:
// then(): Used to handle the fulfilled state.
// catch(): Used to handle the rejected state.
// finally(): Always executed, regardless of fulfilment or rejection.
// async/await: A syntactic sugar for working with Promises, making asynchronous code look more synchronous.


// Promisified version(new promise and .then)
function setTimeoutPromisified(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);   //object of promise class
  });
}
function callback() {
  console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback); //.then mean promise fuction

// Callback version
setTimeout(callback, 3000);





const fs = require('fs');

function readTheFile(sendTheFinalValueHere) {     //This callback function somehow reaches here
    fs.readFile('a.txt', 'utf-8', function (err, data) { //write here asycs program
        sendTheFinalValueHere(data);
    });
}

function readFile(fileName) {
    // read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents) {
    console.log(contents);
}

p.then(callback);


