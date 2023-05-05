const fileSystem = require("fs")

const readFile = fileSystem.readFileSync('../sampleText/samplefile1.doc', "utf8")
console.log(readFile)