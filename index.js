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






