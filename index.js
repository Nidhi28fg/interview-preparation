const fs = require('fs');

const data = fs.readFileSync('./a.txt', 'utf8');  /*file name*/

console.log(data);