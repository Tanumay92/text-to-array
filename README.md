# text-to-array
To convert any text file as key-value pair to an array

To install npm istall text-to-array --save

To use 

const text_to_array = require('text-to-array');

let getArray = text_to_array.getArray(path); //Path of the text file

console.log(getArray); // Will Give you the data array of key pair value of                           text file

i.e. The text file must be like 
    Total step: 0
    Left tap: 0
    Right tap: 7
    Ambulance time: 5.27

