const fs = require ('fs');

const readstream = fs.createReadStream('any file you want to read');
readstream.on('data', (chunk) => {
    console.log("Buffer content:\n", chunk)
    console.log("Actual content:\n", chunk.toString())
})

readStream.on ('end', () => {
    console.log("This is the end of the content fetched")
})