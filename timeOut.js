let myInterval = setInterval(() => {
    console.log('i will show up every two(2) seconds')
}, 2000);

//set Timeout

setTimeout(() => {
    clearInterval(myInterval);
    console.log("your time is up")
}, 10000
)