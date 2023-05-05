const fs = require ('fs');

//appendFile asynchrousnosly

fs.appendFile('.sample2.txt', "\n4. Precious", (error) => {
    if (error) {
        console.log("Couldn't append to file")
    }
    else{
        console.log('successful')
    }
});