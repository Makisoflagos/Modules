//import the event module
const EventEmitter = require('events')

// create an instance of the event

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Good morning ${name}`)
});

myEmitter.emit("greet", "Makis")

myEmitter.on('sum', (firstNumber, secondNumber) => {
    console.log(`The sum of the two numbers ${firstNumber} and ${secondNumber} is: ${firstNumber + secondNumber}`)

})
myEmitter.emit('sum', 5, 9);