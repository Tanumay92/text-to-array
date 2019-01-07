const readFile = require('read-text-file');

module.exports.getArray = path => {

const data = readFile.readSync(path);
const dataSplit = data.replace(/ /g,'');
const dataString = dataSplit;
const dataObj = JSON.stringify(dataString);
let removeR = dataObj.replace(/r/g,'&');
let removeN = removeR.replace(/n/g,'@'); 
let split = removeN.split(':');
var dataArray = [];

var z = '';

operation(split,function(results){
    for(j=0;j<results.length-1;j++){
        if(j==0){
           str = results[j].substring(2,results[j].length-2);
           dataArray.push(str);
        } else {
            str = results[j].substring(0,results[j].length-2);
            dataArray.push(str);
        }
    }
})



function operation(arr,callback){
for(m=0;m<arr.length;m++){
    splitx = arr[m].replace('@','_');
    splity = splitx.replace('&','');
    splitz = splity.replace(/@/g,'n');
    splitb = splitz.replace(/&/g,'r');
    z= z+':'+splitb;
}
   finalSplit = z.split('_');

   callback(finalSplit);
}
 return dataArray;
}