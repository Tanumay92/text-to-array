# text-to-array
To convert any text file as key-value pair to an array

npm install read-text-file --save



const textToArray = require('text-to-array');
 
var dataArray = textToArray.getArray(path); // Path of the text File

console.log(dataArray); // dataArray of file

