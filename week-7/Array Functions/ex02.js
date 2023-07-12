const fs = require('fs')

var raw = fs.readFileSync('./data.json')
var data = JSON.parse(raw)

// Create an array with user objects that have a zip-code that starts with "5".
// You should be left with the objects whose IDs are 3, 4, and 7.

const filteredData = data.filter(d => d.address.zipcode[0] === "5")

console.log(filteredData)