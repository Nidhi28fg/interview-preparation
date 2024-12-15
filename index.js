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


//Node -v: Checks the Node.js version.
// open .: Opens the current directory in the file explorer.
// cd Projects: Navigates to the "Projects" directory.
// touch a.js: Creates an empty file named "a.js".
// node a.js: Executes the JavaScript code in "a.js".
  



function isAnagram(str1, str2) {
  // Convert strings to lowercase and split into arrays of characters
  // The split() method splits a string into an array of substrings and returns the new array.
  const arr1 = str1.toLowerCase().split('');
  const arr2 = str2.toLowerCase().split('');

  // Sort the arrays alphabetically
  // The sort() method sorts an array in place and returns the sorted array, modifying the input array.
  arr1.sort();
  arr2.sort();

  // Join the sorted arrays back into strings
  const sortedStr1 = arr1.join('');
  const sortedStr2 = arr2.join('');

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

const result = isAnagram('listen', 'silent');
console.log(result); // Output: true



function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') === 
         str2.toLowerCase().split('').sort().join('');
}

module.exports = isAnagram; 


// Convert to Lowercase: Converts both strings to lowercase to ensure case-insensitive comparison.
// Split into Arrays: Splits each string into an array of characters.
// Sort Arrays: Sorts the arrays alphabetically.
// Join Arrays: Joins the sorted arrays back into strings.
// Compare Strings: This function compares the sorted strings. If they are equal, the strings are anagrams; otherwise, they are not.


function findLargestElement(numbers) {
  let largestElement = numbers[0]; // Initialize largestElement with the first element (10)

  for (let i = 1; i < numbers.length; i++) { // Iterate from the second element (index 1) to the end
    if (numbers[i] > largestElement) { // Check if the current element is greater than the largestElement
      largestElement = numbers[i]; // Update largestElement if the current element is greater
    }
  }

  return largestElement;
}

const numbers = [10, 5, 20, 8, 15];
const numbers = [3, 7, 2, 9, 1];
const largest = findLargestElement(numbers);
console.log(largest); // Output: 9
console.log(largest); // Output: 20


// In the first iteration: (10, 5, 20, 8, 15)
// i = 1
// numbers[i] = 5
// largestElement = 10 (remains unchanged because 5 is not greater than 10)

// In the second iteration:
// i = 2
// numbers[i] = 20
// largestElement = 20 (updated because 20 is greater than 10) And so on...
// After the loop finishes, the largestElement will hold the value 20, which is the largest number in the array. Therefore, the output of the console.log statement is 20.


// Consider the array numbers = [3, 7, 2, 9, 1].
// First iteration: i = 1
// numbers[i] = 7
// largestElement = 3 (initial value)
// Since 7 is greater than 3, largestElement is updated to 7.

// Second iteration:i = 2
// numbers[i] = 2
// largestElement = 7
// Since 2 is not greater than 7, largestElement remains unchanged.

// Third iteration:
// i = 3
// numbers[i] = 9
// largestElement = 7
// Since 9 is greater than 7, largestElement is updated to 9.
// And so on, until the loop completes, and the final value of largestElement will be 9.








// Callback Hell: The traditional way of nesting setTimeout callbacks can lead to "callback hell", where code becomes hard to read and maintain.
function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Promise chaining: This approach uses promises to create a more readable and manageable way of handling asynchronous operations.
setTimeoutPromisified(1000)
  .then(() => {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(() => {
    console.log("hi there");
  });

console.log("outside the callback hell");

// Promise chaining
const sortedString = str1.split("").sort().join("").toLowerCase();
// asd => ["a", "s", "d"] => ["a", "d", "s"] => "asd"


//async await syntax
function setTimeoutPromisified(duration) {
  return new Promise(function(resolve) {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");

  await setTimeoutPromisified(3000);
  console.log("hello");

  await setTimeoutPromisified(5000);
  console.log("hi there");
}

solve();


document.querySelectorAll("h4")[1].innerHTML = "asdasdasddsa"

// Explanation:
// document.querySelectorAll("h4"): This part selects all elements with the tag name h4 in the HTML document.
// [1]: This index accesses the second h4 element in the list. (Remember, arrays in JavaScript are zero-indexed.)
// .innerHTML: This property gets or sets the inner HTML content of the selected element.
// = "asdasdasddsa": This assigns the string "asdasdasddsa" as the new inner HTML content of the second h4 element.



let ctr = 0;

function callback() {
  document.querySelectorAll("h2")[1].innerHTML = ctr;
  ctr = ctr + 1;
}
setInterval(callback, 1000);
//Now this code runs after 1 second


<div id="todo-1" style="display: flex;">
  <h4>1. Take class</h4>
  <button onclick="deleteTodo(1)">delete</button>
</div>

<div id="todo-2">
  <h4>2. Go out to eat</h4>
  <button onclick="deleteTodo(2)">delete</button>
</div>

<div>
  <input type="text"></input>
  <button>Add Todo</button>
</div>




