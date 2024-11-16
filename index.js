const fs = require('fs');

/*The Node.js file system module allows you to work with the file system on your computer.
To include the File System module, use the require() method:

Node.js फ़ाइल सिस्टम मॉड्यूल आपको अपने कंप्यूटर पर फ़ाइल सिस्टम के साथ काम करने की अनुमति देता है।
फ़ाइल सिस्टम मॉड्यूल को शामिल करने के लिए, require()निम्न विधि का उपयोग करें:*/

const data = fs.readFileSync('./a.txt', 'utf8');  /*file name,  utf8 translates numbers into binary.*/ 


console.log(data); /* in node.js you can run file locally */

const data2 = fs.readFileSync('b.txt', 'utf8');  /*file name*/

console.log(data2);
