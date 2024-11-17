/*This task will take some time to complete.*/
const fs = require('fs');
/*The Node.js file system module allows you to work with the file system on your computer.
To include the File System module, use the require() method:
Node.js फ़ाइल सिस्टम मॉड्यूल आपको अपने कंप्यूटर पर फ़ाइल सिस्टम के साथ काम करने की अनुमति देता है।
फ़ाइल सिस्टम मॉड्यूल को शामिल करने के लिए, require()निम्न विधि का उपयोग करें:*/

const data = fs.readFileSync('./a.txt', 'utf8');  /*file name,  utf8 translates numbers into binary.*/ 
console.log(data); /* in node.js you can run file locally */
const data2 = fs.readFileSync('b.txt', 'utf8');  /*file name*/
console.log(data2);






let ans = 0;
for (let i = 1; i <= 2; i++) {
  ans = ans + i;
  /*First Iteration (i = 1):
  ans = ans + i becomes ans = 0 + 1, so ans becomes 1.
  Second Iteration (i = 2):
  ans = ans + i becomes ans = 1 + 2, so ans becomes 3.*/
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

