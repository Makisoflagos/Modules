const fs = require('fs');
//using asynchronous operations

fs.readFile ('./sample1.txt', "utf8", (error, data) => {
    if (error){
        console.log("unable to read file")
    } 
    else {
        console.log(data)
    }
})