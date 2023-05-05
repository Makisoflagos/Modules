const fs = require ('fs');

// writing to file asynchoronously 

fs.writetoFile('./sample2.txt', "3. Ebuka", (error) => {
    if (error) { 
        console.log("unable to write to file.")
    }
    else {
        console.log('successfully written to file')
    }

});