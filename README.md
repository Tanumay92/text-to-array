# text-to-array
To convert any text file as key-value pair to an array

### To install
npm install read-text-file --save


``` javascript
const textToArray = require('text-to-array');
 
var dataArray = textToArray.getArray(path); // Path of the text File

console.log(dataArray); // dataArray of file
```

### i.e.
The text file should be in form of key-value pair. 
example : 
  
  key1 : value1
  key2 : value2
  key3 : value3

