const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

// Determine whether all of the users live in the city of “South Christy” - 
// you should find the answer to be false in a single, beautiful line of code.


const allFromChristy = data.every(u => u.city === "South Christy")

console.log(allFromChristy)